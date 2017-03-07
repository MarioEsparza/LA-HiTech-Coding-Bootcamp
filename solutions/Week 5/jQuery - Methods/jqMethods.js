/* Week 5 - Lab 2 |  Mario Esparza*/

$(document).ready(function () {
    //ADD YOUR SCRIPT HERE
    $("#header").text("jQuery Methods Demo Page");
    $("p").first().html("<a href='https://www.google.com/' target='_blank'>Google Link</a>");
    $("img").first().attr("title", "pine marten");
    $("input").first().attr("type", "text");
    $("#header").addClass("correct");
    $("li").last().removeClass("wrong");
    $("#fli").toggleClass("done");
    $('select').change(function(){ 
     console.log($("select option:selected").val());
        });
  });
   