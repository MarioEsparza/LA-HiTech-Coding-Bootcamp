/* Week 2 - Lab 1 |  Mario Esparza*/


function promptFunction() {
    var firstName = prompt("Please enter your first name: ");
    var lastName = prompt("Please enter your last name: ");
    var age = prompt("Please enter your age: ");

    displayFunction(firstName, lastName, age);
}

function displayFunction(firstName, lastName, age) {
    if (firstName && lastName && age) {
        document.getElementById("demo").innerHTML =
        "Hello " + firstName + " " + lastName + "! You are " + age + " years old. Congrats bruh.";
    } else {
        alert("ERROR: One or more fields missing. Please enter vaild data.")
        promptFunction();
    }
}

