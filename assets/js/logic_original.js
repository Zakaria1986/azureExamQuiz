// // 1. Grab the start button from index.html: document.querySeelctor("button name") then store in a variable
// // 2.  On click methods: addEventListener('click', function(){}); 
// // 3. write some questions: Use dom methods to create and store series of question then appand to the dom, which would go inside the addEventListner function
// // 4. Write a timer function: that start as the button is clicked;  
// // 4. Write so conditional statement to check:
// // - if the the user selects the wirte answer present the next question 
// // - else/else if deduct time from the timer and resent the net question
// // if there is no question left or the timer has reached 0, end the game. 
// // 5. Ask user to enter their initials:
// // create form in the form insert input box 
// // then take the value store it in browser local storage or in an array or an object 
// // get the information and present it to the user 

// // short hand of document select for global access
// var doc = document;
// var pTag = doc.createElement('p');

// // Getting the start elements from DOM
// // button for choices
// var btn;

// var btnStart = doc.getElementById('start');
// var choices = doc.querySelector("#choices");
// var submitInitial = doc.querySelector("#submit");

// // This is not part of the requirement for this challange
// var pTag = doc.createElement('p');
// pTag.innerText = quizTerms;
// btnStart.insertAdjacentElement('beforebegin', pTag);
// // global varialbes used inside functions
// var CountDowntimerSec = 35;
// // CountDowntimerSec.addEventListener('change', function () {
// //     countDown(CountDowntimerSec);
// // });
// var lastIndex = questions[questions.length - 1] || 0;
// var currentIndex = 0;
// var ChoiceIndex = 0;
// var interVal;
// var score;

// // window locatoin to send user to highcore page 

// /** Ends here **/

// // Create DOM elements

// // countDown function from 60 to 0

// // function countDown() {

// //     interVal = setInterval(function () {
// //         var timerUpdate = doc.querySelector('#time');
// //         timerUpdate.innerText = CountDowntimerSec;
// //         if (CountDowntimerSec <= 0) {
// //             CountDowntimerSec = 0;
// //             timerUpdate.innerText = CountDowntimerSec;
// //             endQuiz();
// //         }
// //         // else if (wrongAnswerDecrement() === "Wrong answer") {
// //         //     console.log("its working");
// //         // }

// //         CountDowntimerSec--;

// //     }, 1000
// //     );

// //     if (currentIndex == lastIndex && (currentIndex == "undefined" || ChoiceIndex == "undefined")) {
// //         clearInterval(interVal);
// //     }
// // }
// function countDown() {
//     // Initialize the timer with minutes and seconds
//     let minutes = 35; // Example: 5-minute countdown
//     let seconds = 0;

//     interVal = setInterval(function () {
//         var timerUpdate = document.querySelector('#time'); // Corrected 'doc' to 'document'

//         // Display the time in MM:SS format
//         timerUpdate.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

//         // Check if the timer has reached 0
//         if (minutes === 0 && seconds === 0) {
//             clearInterval(interVal); // Stop the timer
//             endQuiz(); // Call the endQuiz function
//         } else {
//             // Decrement the timer
//             if (seconds === 0) {
//                 minutes--; // Decrement minutes
//                 seconds = 59; // Reset seconds to 59
//             } else {
//                 seconds--; // Decrement seconds
//             }
//         }

//         // Check if the quiz has ended (e.g., all questions answered)
//         if (currentIndex === lastIndex || currentIndex === undefined || ChoiceIndex === undefined) {
//             clearInterval(interVal); // Stop the timer
//         }
//     }, 1000); // Update every second
// }
// // this function ends the quiz based on some condition 
// function endQuiz() {
//     var questionsPlaceHolder = doc.querySelector("#questions");
//     questionsPlaceHolder.classList.add("hide");

//     var endScreenPlaceHolder = doc.querySelector("#end-screen");
//     endScreenPlaceHolder.classList.remove("hide");

//     var finalScore = doc.querySelector("#final-score");
//     finalScore.innerText = CountDowntimerSec;
// }

// // When the initial is attempted to save the code below saves the score and intial 
// // in the local storage on the browser, which then redirect user to highscore page
// submitInitial.addEventListener('click', function (e) {

//     // This code checks to see if the timer is 0 or less, if so return 0 and not -1
//     if (CountDowntimerSec <= 0) {
//         e.preventDefault;
//         CountDowntimerSec = 0;
//     }
//     // Preparing date for local storage
//     var getUserInitial = doc.getElementById("initials").value;

//     let browserLocalStorage = JSON.parse(localStorage.getItem("quizResult")) || [];
//     //var browserLocalStorage = [];

//     var newItem = {
//         "UserScore": CountDowntimerSec,
//         "userInitial": getUserInitial
//     }
//     browserLocalStorage.push(newItem);

//     // Storing data in local storage. Before storing data is being strinigying as objects cannot be stored
//     localStorage.setItem("quizResult", JSON.stringify(browserLocalStorage));

//     //Redirecting to highscore page
//     window.location.href = "./highscores.html";
// });
// // click = true is used in the if codition within the choice event to check if the event is clicked, 
// // if so then excute the code inside 
// var click = true;
// choices.addEventListener('click', function (e) {
//     e.preventDefault;
//     if (click) {
//         // Index set to 0 for choices question. when the choice is clicked the current index for question gets increment so need to keep choice quesiton 
//         // one one index position less to it maches with the same index as the title index
//         ChoiceIndex = currentIndex;
//         //
//         // then run the presentQuiz with next question
//         userSelection(e);

//         setTimeout(() => {

//             // very time the next question is fetched presented 
//             // Code checks to see if the current index is last element in the array 
//             // if so end quiz other wise continue to get the next question
//             if (questions.length - 1 === currentIndex || CountDowntimerSec < 0) {
//                 // Create a form that take users initials 
//                 // and hide the current questions 
//                 endQuiz();

//             } else {
//                 currentIndex++;
//                 presentQuiz(currentIndex);
//                 //userFeedback(currentIndex);
//             }
//         }, 1000);
//     }
// });

// // This ist he main fuction which gets the questions and creates DOM elements
// function presentQuiz(currIndex) {

//     var questionsPlaceHolder = doc.querySelector("#questions");
//     var startScrean = doc.querySelector("#start-screen");
//     var questionTile = doc.querySelector("#question-title");

//     // move the empty out the choices div here

//     for (var i = 0; i < questions[currIndex].choices.length; i++) {
//         var title = questions[currIndex].title;
//         questionTile.innerText = title;

//         // Set if statement, which stops the timer if the question i the last item in the array

//         // Keeping track of score question is the last question in the array;

//         btn = doc.createElement('BUTTON');
//         btn.setAttribute("class", "userChoice");
//         // btn.setAttribute("onclick", "sound()");
//         // Setting custome attribute 
//         btn.setAttribute("data-choice", questions[currIndex].choices[i]);
//         btn.innerText = i + 1 + " " + questions[currIndex].choices[i];
//         console.log("array obj index " + currIndex);
//         choices.append(btn);
//     }
//     questionsPlaceHolder.classList.remove("hide");
//     startScrean.classList.add('hide');
// }

// // choices.addEventListener('click', userSelection)
// // Get the User choice of answers
// function userSelection(e) {

//     // check first if there is a next question before show the next question
//     var clickFeedBack;
//     if (e.target) {
//         var userClicpResult = e.target;
//         // clickFeedBack = userClicpResult.getAttribute('data-choice');
//         clickFeedBack = userClicpResult.dataset.choice;
//         console.log("this is user feeback from userSelection e " + clickFeedBack);
//     }
//     // Pass on the choice to userFeedback function for validation
//     userFeedback(clickFeedBack);
// }

// // User feedback functions, which validates the user choice with correct answer
// function userFeedback(feedback) {
//     console.log("hello this your freind feedback function userfeedback " + feedback);
//     var currIndex = ChoiceIndex;
//     var UserAlermessage;
//     var userAlert = doc.getElementById('feedback');
//     var rightAnswer = questions[currIndex].answer;
//     // console.log(questions["Current index " + currIndex]);
//     var button = doc.querySelector(".userChoice");
//     console.log('this is the write answer....', button)

//     var sound = {

//         "correctSound": function sound() {
//             var snd = new Audio('assets/sfx/correct.wav');
//             snd.play(); //plays the sound
//         },
//         "wrongSound": function sound() {
//             var snd = new Audio('assets/sfx/incorrect.wav');
//             snd.play();//plays the sound
//         }
//     }

//     // for (var i = 0; i < currInextChoice.length; i++) {
//     if (feedback === rightAnswer) {
//         var sound = sound.correctSound();
//         button.setAttribute('onclick', 'sound()')
//         UserAlermessage = "Correct answer";
//     }
//     else {
//         var sound = sound.wrongSound();
//         button.setAttribute('onclick', 'sound()')
//         UserAlermessage = 'Wrong answer';
//         if (CountDowntimerSec >= 0) {
//             CountDowntimerSec -= 10;
//         }
//     }

//     userAlert.classList.remove('hide');
//     userAlert.innerText = UserAlermessage;
//     // && questions.length(questions.lastIndexOf())
//     // var lastWord = questions[questions.length - 1];
//     // var lastIndex = questions.lastIndexOf(lastWord);

//     if (currentIndex == (questions.length - 1)) {
//         // console.log('this is true');
//         // var countclear = countDown();
//         // console.log('this is true', countclear);
//         clearInterval(interVal);
//     }
//     setTimeout(() => {
//         // check if the choices exist from previouse quesiton if it does then set the choices to empty
//         if (choices.hasChildNodes() && currentIndex !== lastIndex) {
//             choices.innerHTML = " ";
//         }
//         // the feedback message before loading the next question
//         userAlert.classList.add('hide');
//     }, 1000);
// }

// // The function bellow is bit uneccessary, but don't wanna mess around the code just
// function startQuiz() {
//     presentQuiz(currentIndex);
//     countDown();
//     //console.log(userSelection());
// }
// // This function gets called in the start button below 
// function callBackFunc() {
//     startQuiz();
// }
// // When start button is click countDown function gets regards and the function is passed by reference
// btnStart.addEventListener('click', callBackFunc);

// Global variables
var doc = document;
var btnStart = doc.getElementById('start');
var choices = doc.querySelector("#choices");
var submitInitial = doc.querySelector("#submit");
var CountDowntimerSec = 60 * 60; // Timer duration in seconds (60 minutes)
var lastIndex = questions.length - 1;
var currentIndex = 0;
var ChoiceIndex = 0;
var interVal;
var score = 0; // Variable to track the number of correct answers

var totalQuestions = questions.length;


// Speech synthesis object
var synth = window.speechSynthesis;

// Function to read text aloud
function speak(text) {
    if (synth.speaking) {
        synth.cancel(); // Stop any ongoing speech
    }

    var utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance); // Speak the text
}

// Auto-read the question on page load
window.addEventListener('load', function () {
    if (questions.length > 0) {
        speak(questions[currentIndex].title); // Read the first question
    }
});


// Sound object for correct and wrong answers
var sound = {
    correctSound: function () {
        var snd = new Audio('assets/sfx/correct.wav');
        snd.play(); // Play the correct sound
    },
    wrongSound: function () {
        var snd = new Audio('assets/sfx/incorrect.wav');
        snd.play(); // Play the wrong sound
    }
};

// Display quiz terms or instructions
var pTag = doc.createElement('p');
pTag.innerText = quizTerms; // Add quiz terms or instructions
btnStart.insertAdjacentElement('beforebegin', pTag);


// Start the quiz
btnStart.addEventListener('click', function () {
    startQuiz();
});

// Function to start the quiz
function startQuiz() {
    presentQuiz(currentIndex); // Display the first question
    countDown(); // Start the timer
}

// Timer function
function countDown() {
    interVal = setInterval(function () {
        // Convert total seconds to minutes and seconds
        var minutes = Math.floor(CountDowntimerSec / 60);
        var seconds = CountDowntimerSec % 60;

        // Display the time in MM:SS format
        var timerUpdate = doc.querySelector('#time');
        timerUpdate.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Check if the timer has reached 0
        if (CountDowntimerSec <= 0) {
            clearInterval(interVal); // Stop the timer
            endQuiz(); // End the quiz
        }

        CountDowntimerSec--; // Decrement the timer
    }, 1000); // Update every second
}

// Function to display questions
function presentQuiz(currIndex) {
    var questionsPlaceHolder = doc.querySelector("#questions");
    var startScrean = doc.querySelector("#start-screen");
    var questionTile = doc.querySelector("#question-title");

    // Clear previous choices
    choices.innerHTML = "";

    // Display the current question number and total questions
    var questionNumber = doc.querySelector("#question-number");
    questionNumber.innerText = `Question ${currIndex + 1}, remaining ${totalQuestions - (currIndex)} of ${totalQuestions}. `;
    // Display the current question
    questionTile.innerText = questions[currIndex].title;

    // Auto-read the current question
    speak(questions[currIndex].title);

    // Add hover-to-read functionality to the question title
    questionTile.addEventListener('mouseover', function () {
        speak(questions[currIndex].title); // Read the question on hover
    });

    // Stop reading when the user stops hovering over the button
    questionTile.addEventListener('mouseout', function () {
        stopSpeaking(); // Stop the speech
    });


    // Create buttons for each choice with A, B, C, D labels
    var labels = ["A", "B", "C", "D", "E", "F", "G"]; // 

    // Create buttons for each choice
    for (var i = 0; i < questions[currIndex].choices.length; i++) {
        var btn = doc.createElement('BUTTON');
        btn.setAttribute("class", "userChoice");
        btn.setAttribute("data-choice", questions[currIndex].choices[i]);
        btn.innerText = questions[currIndex].choices[i];
        btn.innerText = `${labels[i]}. ${questions[currIndex].choices[i]}`; // Add A, B, C, D l

        // Add hover-to-read functionality to the option buttons
        btn.addEventListener('mouseover', function () {
            speak(this.innerText); // Read the option text on hover
        });

        // Stop reading when the user stops hovering over the button
        btn.addEventListener('mouseout', function () {
            stopSpeaking(); // Stop the speech
        });


        choices.append(btn);
    }

    // Show the questions section and hide the start screen
    questionsPlaceHolder.classList.remove("hide");
    startScrean.classList.add('hide');
}

// Function to stop speech synthesis
function stopSpeaking() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel(); // Stop any ongoing speech
    }
}

// Function to handle user selection
choices.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('userChoice')) {
        // Set ChoiceIndex to the current question index
        ChoiceIndex = currentIndex;

        var userChoice = e.target.dataset.choice;
        userFeedback(userChoice); // Validate the user's choice

        // Move to the next question after a delay
        setTimeout(() => {
            if (currentIndex < lastIndex) {
                currentIndex++;
                presentQuiz(currentIndex); // Display the next question
            } else {
                endQuiz(); // End the quiz if there are no more questions
            }
        }, 3000);
    }
});

// Function to validate the user's choice and show feedback
function userFeedback(feedback) {
    var currIndex = ChoiceIndex;
    var userAlert = doc.getElementById('feedback');
    var rightAnswer = questions[currIndex].answer;

    // Trim and normalize case for comparison
    var normalizedFeedback = feedback.trim().toLowerCase();
    var normalizedRightAnswer = rightAnswer.trim().toLowerCase();

    // Check if the user's answer matches the correct answer
    if (normalizedFeedback === normalizedRightAnswer) {
        userAlert.innerText = "Correct!";
        score++; // Increment the score for correct answers
        sound.correctSound(); // Play the correct sound
    } else {
        // Show the correct answer if the user's choice is wrong
        userAlert.innerText = `Wrong! The correct answer is: ${rightAnswer}.-10 seconds`;
        CountDowntimerSec -= 10; // Deduct 10 seconds for wrong answer
        sound.wrongSound(); // Play the wrong sound

        // Ensure the timer doesn't go below 0
        if (CountDowntimerSec < 0) {
            CountDowntimerSec = 0;
        }

        // Highlight the correct answer button
        var buttons = choices.querySelectorAll('.userChoice');
        buttons.forEach(button => {
            if (button.dataset.choice === rightAnswer) {
                button.style.backgroundColor = "green"; // Highlight correct answer
            }
        });
    }

    // Show feedback for 1 second
    userAlert.classList.remove('hide');
    setTimeout(() => {
        userAlert.classList.add('hide');
        // Reset button styles after feedback
        var buttons = choices.querySelectorAll('.userChoice');
        buttons.forEach(button => {
            button.style.backgroundColor = ""; // Reset button color
        });
    }, 4000);
}

// Function to end the quiz
function endQuiz() {
    clearInterval(interVal); // Stop the timer

    var questionsPlaceHolder = doc.querySelector("#questions");
    var endScreenPlaceHolder = doc.querySelector("#end-screen");

    // Hide the questions section and show the end screen
    questionsPlaceHolder.classList.add("hide");
    endScreenPlaceHolder.classList.remove("hide");

    // Display the final score (number of correct answers)
    var finalScore = doc.querySelector("#final-score");
    finalScore.innerText = score;
}

// Function to save the score and initials
submitInitial.addEventListener('click', function (e) {
    e.preventDefault();

    // Get the user's initials
    var getUserInitial = doc.getElementById("initials").value;

    // Prepare data for local storage
    let browserLocalStorage = JSON.parse(localStorage.getItem("quizResult")) || [];
    var newItem = {
        "UserScore": score, // Save the number of correct answers
        "userInitial": getUserInitial
    };
    browserLocalStorage.push(newItem);

    // Store data in local storage
    localStorage.setItem("quizResult", JSON.stringify(browserLocalStorage));

    // Redirect to the high scores page
    window.location.href = "./highscores.html";
});