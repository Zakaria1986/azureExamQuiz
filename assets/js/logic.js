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
var answerSubmitted = false; // Track if an answer has been submitted for the current question

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
        btn.innerText = `${labels[i]}. ${questions[currIndex].choices[i]}`; // Add A, B, C, D labels

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
    }
});

// Function to validate the user's choice and show feedback
function userFeedback(feedback) {
    if (answerSubmitted) return; // Exit if an answer has already been submitted

    var currIndex = ChoiceIndex;
    var userAlert = doc.getElementById('feedback');
    var rightAnswer = questions[currIndex].answer;

    // Trim and normalize case for comparison
    var normalizedFeedback = feedback.trim().toLowerCase();
    var normalizedRightAnswer = rightAnswer.trim().toLowerCase();

    // Check if the user's answer matches the correct answer
    if (normalizedFeedback === normalizedRightAnswer) {
        userAlert.innerText = "Correct!";
        score++; // Increment the score immediately on correct answer
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

    // Disable all answer buttons to prevent further clicks
    var buttons = choices.querySelectorAll('.userChoice');
    buttons.forEach(button => {
        button.disabled = true; // Disable the button
    });

    // Mark that an answer has been submitted
    answerSubmitted = true;

    // Show feedback and the "Next" button
    userAlert.classList.remove('hide');
    var nextButton = doc.getElementById('next-button');
    nextButton.classList.remove('hide'); // Show the "Next" button
}

// Function to reset button styles
function resetButtonStyles() {
    var buttons = choices.querySelectorAll('.userChoice');
    buttons.forEach(button => {
        button.style.backgroundColor = ""; // Reset button color
    });
}

// Handle "Next" button click
var nextButton = doc.getElementById('next-button');
nextButton.addEventListener('click', function () {
    // Hide feedback and reset button styles
    var userAlert = doc.getElementById('feedback');
    userAlert.classList.add('hide');
    resetButtonStyles();

    // Hide the "Next" button
    nextButton.classList.add('hide');

    // Re-enable answer buttons for the next question
    var buttons = choices.querySelectorAll('.userChoice');
    buttons.forEach(button => {
        button.disabled = false; // Re-enable the button
    });

    // Reset the answer submission flag
    answerSubmitted = false;

    // Move to the next question or end the quiz
    if (currentIndex < lastIndex) {
        currentIndex++;
        presentQuiz(currentIndex); // Display the next question
    } else {
        endQuiz(); // End the quiz if there are no more questions
    }
});

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