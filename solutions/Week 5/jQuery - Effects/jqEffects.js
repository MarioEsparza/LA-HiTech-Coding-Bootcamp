/* Week 5 - Lab 4 |  Mario Esparza*/

$(document).ready(function () {
    $("#button1").click(function () {
             $(".square").fadeToggle(1000);
            $("#button1").text() == "Fade Out!" ? $("#button1").text("Fade In!") : $("#button1").text("Fade Out!");
    });

    $("#button2").click(function () {
             $(".square").slideToggle(1000);
              $("#button2").text() == "Slide Out!" ? $("#button2").text("Slide In!") : $("#button2").text("Slide Out!");
    });
});