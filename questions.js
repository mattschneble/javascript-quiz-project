// variable with array and object for questions 
var questions = [
    {
        title: "String values must be enclosed within __________ when they are to be assigned to a variable(s).",
        choices: ["quotes", "straight brackets", "commas", "parenthesis"],
        answer: "quotes"
    },

    {
        title: "In Javascript, an array can be used to store ______.",
        choices: ["other arrays", "booleans", "numbers and string", "all of the above"],
        answer: "all of the above"
    },

    {
        title: "A very useful tool to be used during developing software and debugging by printing content to the debugger itself is what?",
        choices: ["Powershell", "local Storage", "console log", "conditional statements"],
        answer: "console log"
    },

    {
        title: "Which of the following is not a commonly used data type?",
        choices: ["alerts", "booleans", "numbers", "strings"],
        answer: "alerts"
    },

    {
        title: "What encircles the condition of an if/else statement?",
        choices: ["square brackets", "parentheses", "commas", "ampersands"],
        answer: "parentheses"
    },

    {
        title: "What Java method is used to generate a random number?",
        choices: ["integerRandom", "numberRandom", "random", "mathRandom"],
        answer: "mathRandom"
    },

    {
        title: "What do you call something you define with a given value for holding later?",
        choices: ["array", "variable", "string", "boolean"],
        answer: "variable"
    },

    {
        title: "What sheet do you pull from to get webpage elements?",
        choices: ["style.css", "index.html", "reset.css", "script.js"],
        answer: "index.html"
    },

];
// Declare variables
var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");
var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array generating questions and answers
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
