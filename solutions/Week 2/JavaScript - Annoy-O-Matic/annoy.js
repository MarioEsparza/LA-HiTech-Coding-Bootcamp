/* Week 2 - Lab 5 |  Mario Esparza*/

function annoyFunction() {
    var answer = prompt("Are we there yet?")
    console.log("User Input: ", answer);

     while (!answer || !(answer == "yes" || answer == "yeah") ) {
        answer = prompt("ARE WE THERE YET!?!?!");
    } 
    alert("Yay, we finally made it!");
}
