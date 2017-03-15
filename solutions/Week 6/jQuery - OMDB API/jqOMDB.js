
$(document).ready(function () {
    $("#search").on("click", function () {
        $("#results").empty();
        var movieTitle = $("#input").val();
        var APIUrl = "//www.omdbapi.com/?s=" + movieTitle;
        console.log(APIUrl);
        getRepo(APIUrl, movieTitle);
    });
});

function getRepo(apiURL, movieTitle) {
    $("#loader").css("display", "block");
    var html = "";
    $.ajax({
        type: "GET",
        dataType: "json",
        url: apiURL,
        success: function (data) {
            $("#loader").css("display", "none");
            if (data.Error == "Movie not found!") {
                $("#results").html("<h5><span class='glyphicon glyphicon-warning-sign glyph-style'></span> Error: Movie not found!</h5>");
                $("#results").css("background-color", "#f14b4b");
            } else {
                $("#results").append("<h2>Results for " + movieTitle + "...</h2>");
                $("#results").css("background-color", "#eee");
                $.each(data.Search, function (i, item) {
                    html += '<h4>' + this.Title + ' (' + this.Year + ')</h4>';
                });
                $('#results').append(html);
            }
        }
    });

}