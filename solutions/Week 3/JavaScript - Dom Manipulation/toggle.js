/* Week 3 - Lab 12 |  Mario Esparza*/


function togg() {
    var btn = document.getElementById('togBtn');
    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "purple";
        btn.style.backgroundColor = 'white';
        btn.style.color = 'purple'
    } else {
        document.body.style.backgroundColor = "white";
        btn.style.backgroundColor = 'purple';
        btn.style.color = 'white'
    }

 }

