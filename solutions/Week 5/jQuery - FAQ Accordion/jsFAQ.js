// JavaScript File
/* Week 5 - Lab 4 |  Mario Esparza*/

$(document).ready(function () {
    $(".q").click(function () {
             $('.a:not(this):visible').slideToggle(1000);
             $(this).next().slideToggle(1000);
             $(this).children().toggleClass("rotate");
        });
});
 
