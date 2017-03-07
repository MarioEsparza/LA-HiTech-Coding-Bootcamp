/* Week 5 - Lab 7 |  Mario Esparza*/

$(document).ready(function () {
        var fadeSpeed = 500;
    //Set First OnLoad Image
        $("#photo").html("<img src='" + $("#gallery a").first().attr('href') + "' width='auto' height='auto' alt='" + $("#gallery a").first().children().attr("alt") + "'>");

    $("#gallery a").on("click", function (event) {
        event.preventDefault();      
        var image_href = $(this).attr('href');
        var image_src = $(this).children();      
        $("#photo").fadeOut(fadeSpeed, function () {
            $("#photo").html("<img src='" + image_href + "' width='auto' height='auto' alt='" + image_src.attr("alt") + "'>").fadeIn(fadeSpeed);
        });

    });

});

