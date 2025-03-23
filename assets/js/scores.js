// Global veriable and elemets storage
var doc = document;
var scoreElement = doc.querySelector("#highscores");
var goBackToStartScreen = doc.querySelector("Button");
var scoreClear = doc.querySelector("#clear");
var liEl = doc.createElement('li');
scoreElement.setAttribute("list-style-type", "none");
var UserOutputString = '';
var getUserResult = JSON.parse(localStorage.getItem("quizResult"));
window.addEventListener('load', function () {
    // Here counting down to show the most recent score first
    for (var i = getUserResult.length - 1; i > -1; i--) {
        UserOutputString += `<li style='list-style-type: none'>${i + 1}. <span style='font-weight:bold'
    '> Your initial is:</span> ${getUserResult[i].userInitial} <span style='font-weight:bold'
    '> and your highscore is:</span> ${getUserResult[i].UserScore}</li>`;

        scoreElement.innerHTML = UserOutputString;
    }
});

// when the clear button is clicked this event clears the local storage and sets the li element to nothing
scoreClear.addEventListener('click', function (e) {
    e.preventDefault;
    localStorage.removeItem("quizResult");
    scoreElement.innerHTML = " ";
});

// when user clicks this button removes stored value and should allow the users start again

// That piece of code is not needed as I've realised users might wanna compare their scores by more than one attempted and comparing the score

// goBackToStartScreen.addEventListener('click', function (e) {
//     e.preventDefault;
//     localStorage.removeItem("quizResult");
// });