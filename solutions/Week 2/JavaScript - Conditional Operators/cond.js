/* Week 2 - Lab 3 |  Mario Esparza*/

function getAge() {
    var age = document.getElementById("age").value;
    console.log("Age: ", age);
    var string = null;

    if (age.match(/^[0-9]+$/) != null) {
        if (age < 0) {
            alert("ERROR: Number cannot be negative. Try again")
        }else{
            if (age == 21) {
                displayFunction("Happy 21st Birthday!");          
            }
            if (!(age % 2 == 0)) {
                displayFunction("Your age is odd!");
            }
            if (Math.sqrt(age) % 1 == 0) {
                displayFunction("Perfect Square!");
            }
        }
    } else {
        alert("ERROR: Enter a valid number. Try again")
    }
}

function displayFunction(string) {
    var para = document.createElement("h3");
    var node = document.createTextNode(string);
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
}

