/* Week 2 - Lab 4 |  Mario Esparza*/

var randNum = getNumber(1, 10);
var counter = 1;

function guessNum() {

    var guessNum = document.getElementById("guess").value;
    console.log("Random Number: ", randNum, "User Guess: ", guessNum);

    if (!guessNum || !(guessNum >= 1 && guessNum <= 10)) {
        alert("ERROR: Enter a valid number between 1 - 10.")
    } else {
        if (guessNum == randNum) {
            displayFunction(guessNum, "Success");
        } else if (guessNum > randNum) {
            displayFunction(guessNum, "High");
        } else if (guessNum < randNum) {
            displayFunction(guessNum, "Low");
        }
    }   
}

function displayFunction(guessNum, string) {
    if (string == "Success") {
        document.getElementById('hide').hide();
        document.getElementById("message").innerHTML =
     "<p class='lead' style='text-align: center;'>You guessed it right in " + counter + " trys! The number is <strong>" + guessNum + "</strong>. Congrats!</p><br/><button class='btn btn-success' type='button' onClick='window.location.reload()' style='text-align: center;'>Try Again</button>";
    } else {
        if (string == "Low") {
            document.getElementById("message").innerHTML =
            "<p class='lead' style='text-align: center;'>Your guess is <strong>low</strong>. Try a higher number <span class='glyphicon glyphicon-thumbs-up glyph-style'></span></p>";
        } else {
            document.getElementById("message").innerHTML =
            "<p class='lead' style='text-align: center;'>Your guess is a <strrong>high</strong>. Try a lower number <span class='glyphicon glyphicon-thumbs-down glyph-style'></span></p>";
        }
        counter++;
    }
}

function getNumber(min, max) {
    var number = min + Math.floor(Math.random() * max);
    return number;
}

Element.prototype.hide = function () {
    this.style.display = 'none';
}