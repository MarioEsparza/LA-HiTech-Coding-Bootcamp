/* Week 2 - Lab 2 |  Mario Esparza*/

function getAge() {
    var age = document.getElementById("age").value;
    if (age.match(/^[0-9]+$/) != null) {
        days = age * 365.25;
        console.log("Days: ", days);
        displayFunction(days);
    } else {
        alert("ERROR: Enter a valid age number.")
    }
}

function displayFunction(days) {
        document.getElementById("demo").innerHTML =
        "You have been alive approximately <strong>" + days + "</strong> days. Congrats bruh.";
}

