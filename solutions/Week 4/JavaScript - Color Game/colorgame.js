/* Week 4 - Lab 8 |  Mario Esparza*/
document.addEventListener("DOMContentLoaded", function (event) {
    reset();
});

var chosenRGB;
var BOXES = 3;

function createSquares() {
    var chosenOne = getNumber(1, BOXES);
    for (var i = 1; i < BOXES + 1; i++) {
        var square = document.querySelector('#sqr' + i);
        var R = getNumber(1, 255),
            G = getNumber(1, 255),
            B = getNumber(1, 255);
        square.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
        if (chosenOne == i) {
            var box = document.querySelector('#sqr' + i);
            chosenRGB = box.style.backgroundColor;
            document.getElementById("R").innerHTML = R;
            document.getElementById("G").innerHTML = G;
            document.getElementById("B").innerHTML = B;
        }
    }
}

function easyMode() {
    document.getElementById("result").innerHTML =
          "";
    BOXES = 3;

    var easyBTN = document.getElementById("ez");
    easyBTN.style.backgroundColor = '#4682b6';
    easyBTN.style.color = "#fff";

    var hardBTN = document.getElementById("hard");
    hardBTN.style.backgroundColor = '#fff';
    hardBTN.style.color = "#4682b6";
}

function hardMode() {
    document.getElementById("result").innerHTML =
          "";
    BOXES = 6;
 
    var easyBTN = document.getElementById("ez");
    easyBTN.style.backgroundColor = '#fff';
    easyBTN.style.color = "#4682b6";

    var hardBTN = document.getElementById("hard");
    hardBTN.style.backgroundColor = '#4682b6';
    hardBTN.style.color = "#fff";
}
function reset() {
    document.getElementById("new").innerHTML =
         "New Colors";
    document.getElementById("result").innerHTML =
          "";
    var header = document.querySelector('#hed');
    header.style.backgroundColor = "";

    if (BOXES == 6) {
        document.getElementById("newRow").innerHTML =
         "<div id='sqr4' class='col-xs-4 sqr' onclick='check(this);'></div><div id='sqr5' class='col-xs-4 sqr' onclick='check(this);'></div><div id='sqr6' class='col-xs-4 sqr' onclick='check(this);'></div>"
    } else {
        document.getElementById("newRow").innerHTML =
      ""
    }
    for (var i = 1; i < BOXES + 1; i++) {
        var square = document.querySelector('#sqr' + i);
        square.show();
    }
    if (BOXES == 3) {
        easyMode();
    } else {
        hardMode();     
    }
    createSquares();
}

function getNumber(min, max) {
    var number = min + Math.floor(Math.random() * max);
    return number;
}

function check(box) {
    if (chosenRGB == box.style.backgroundColor) {
        document.getElementById("result").innerHTML =
            "<strong class='winning'>Correct!</strong>";
        for (var i = 1; i <  BOXES + 1; i++) {
            var square = document.querySelector('#sqr' + i);
            square.show();
            square.style.backgroundColor = chosenRGB;
        }
        var header = document.querySelector('#hed');
        header.style.backgroundColor = chosenRGB;
        document.getElementById("new").innerHTML =
         "Play Again?";
    } else {
        document.getElementById("result").innerHTML =
           "<strong class=' again'>Try Again!</strong>";
        box.hide();
    }
}

Element.prototype.hide = function () {
    this.style.visibility = 'hidden';
}

Element.prototype.show = function () {
    this.style.visibility = 'visible';
}


