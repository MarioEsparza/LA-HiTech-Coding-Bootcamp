/* Week 3 - Lab 13 |  Mario Esparza*/

function input() {
    var limit = document.getElementById("limit").value;
    document.getElementById("scoreLimit").innerHTML = limit;   
}

function playOne() {
    var limit = document.getElementById("scoreLimit").innerHTML;
    var currentScore = document.getElementById("scoreOne").innerHTML;
    console.log("Limit: ", limit, "Player 1 Score: ", currentScore);
    var opponentScore = document.getElementById("scoreTwo").innerHTML;
    if (!(currentScore == limit || opponentScore == limit)) {
        currentScore++;
        document.getElementById("scoreOne").innerHTML = currentScore;
    }
    if (currentScore == limit) {
        document.getElementById("message").innerHTML = 
            "<span class='glyphicon glyphicon-king'></span> Player One Wins!"
    } 
}

function playTwo() {
    var limit = document.getElementById("scoreLimit").innerHTML;
    var currentScore = document.getElementById("scoreTwo").innerHTML;
    var opponentScore = document.getElementById("scoreOne").innerHTML;
    if (!(currentScore == limit || opponentScore == limit)) {
        currentScore++;
        document.getElementById("scoreTwo").innerHTML = currentScore;
    }
    if (currentScore == limit) {
        document.getElementById("message").innerHTML =
            "<span class='glyphicon glyphicon-king'></span> Player Two Wins!"
    }
}

function reset() {
    document.getElementById("scoreLimit").innerHTML = 5;
    document.getElementById("scoreOne").innerHTML = 0;
    document.getElementById("scoreTwo").innerHTML = 0;
    document.getElementById("message").innerHTML =
           "<span class='glyphicon glyphicon-edit glyph-style'></span> Lab 13: Score Keeper"
}

