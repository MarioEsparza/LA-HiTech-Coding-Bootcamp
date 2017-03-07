/* Week 4 - Lab 6 |  Mario Esparza*/


function getWord() {
    var word = document.getElementById("word").value;
    console.log("user Input ", word);
    var scrambledWord = scramble(word);
    var unscrambledWord = unscramble(word, scrambledWord);
    document.getElementById('hide').hide();
    document.getElementById("message").innerHTML =
    "<p class='lead content-header'>You word is " + word + ". Here it is scrambled in an array: <strong>" + scramble(word) + "</strong></p><br/>"
    + "<h3 class='lead content-header'>Unscrambled array: <strong>" + unscrambledWord + "</strong></h3><button class='btn btn-success' type='button' onClick='window.location.reload()' style='text-align: center;'>Try Again</button>";
}
function scramble(string) {
    var array = [];
    for (var i = 0; i < string.length;) {
        var randomIndex = getNumber(0, string.length);
        if (!(array[randomIndex])) {
            array[randomIndex] = string[i];
            i++
        }
        var randomIndex = getNumber(0, string.length);
    }
    console.log("Scrambled Word: ", array.toString());
    return array;
}

function getNumber(min, max) {
    var number = min + Math.floor(Math.random() * max);
    return number;
}


function unscramble(string, array) {
    var newArr = array,
        newStr = string;
    for (var i = 0; i < newStr.length; i++) {
        for (var u = 0; u < newStr.length; u++) {
            if (newStr[i] == newArr[u]) {
                var temp = newArr[i];
                newArr[i] = newArr[u];
                newArr[u] = temp;
            }
        }
    }
    console.log("Unscrambled Word: ", newArr.toString());
    return newArr;
}



Element.prototype.hide = function () {
    this.style.display = 'none';
}