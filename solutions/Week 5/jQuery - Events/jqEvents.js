/* Week 5 - Lab 3 |  Mario Esparza*/

$(document).ready(function () {
    //.each if there is more than one
    $("button").each(function () {
        var $thisButton = $(this);
        $thisButton.click(function () {
            $(this).css("background-color", "pink");
            alert($(this).text());
        });
    });
    $("input").on("keyup", function (event) {
        console.log("A KEY HAS BEEN PRESSED!")
        console.log("Key Pressed: " + event.which);
    });
    $("h1").each(function () {
        $(this).on("click", function () {
            $(this).css("color", "purple");
        });
    });

});