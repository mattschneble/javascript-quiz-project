// declaring needed variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Added event listener to clear scores when clicked
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// pulls the high scores from the local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Added event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});