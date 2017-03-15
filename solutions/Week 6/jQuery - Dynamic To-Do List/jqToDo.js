/* Week 5 - Lab 3 |  Mario Esparza*/

$(document).ready(function() {
    $("input").on("keyup", function(which) {
        if (event.which == 13 && this.value != "") {
            $("ul").append("<li class='Item'><span><i class='fa fa-trash'></i></span>" + this.value + "</li>");
            $("input").val("");
        }
    });
    $(".Item").each(function() {
        $(this).on("click", function() {
            $(this).addClass("completed");
        });
    });

    $(".fa-plus").on("click", function() {
        $("input").fadeToggle(500);
    });

    $(".fa-trash").on("click", function() {
        $(this).closest( "li" ).fadeOut(500, function (){
             $(this).closest("li").remove();
        });
       
    });
});
