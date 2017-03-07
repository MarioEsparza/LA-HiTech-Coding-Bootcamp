/* Week 3 - Lab 10 |  Mario Esparza*/


function movies() {

    var movieDB = [{movie: "Moonlight", seen: "yes", rating: "4.5" },
                   {movie: "La La Land", seen: "no", rating: "5" },
                   {movie: "Rogue One", seen: "yes", rating: "4.5" },
                   {movie: "Star Wars", seen: "yes", rating: "3" },
                   ]
    var stringToPrint = "";
    for (var i = 0; i < movieDB.length; i++) {
        stringToPrint += "You have ";
        if (movieDB[i].seen == "no") {
            stringToPrint += "not ";
        }
        stringToPrint += "seen " + "<strong>'" + movieDB[i].movie + "'</strong> - " + movieDB[i].rating + " stars.<br>"       
    }

    document.getElementById("message").innerHTML =
     "<h3 class='lead' style='text-align: center;'>Movie List: </h3><br>" + stringToPrint + "<br/><button class='btn btn-success' type='button' onClick='window.location.reload()' style='text-align: center;'>Reset</button>";    
}

