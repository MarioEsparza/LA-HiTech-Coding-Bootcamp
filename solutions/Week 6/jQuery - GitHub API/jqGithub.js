/*
This script finds the repositories of the github username entered. 

1. Attach a "click" event handler for the button.
2. Grab the username from the text input
3. With the username, create the github API url and store it in a variable named APIUrl
	- The completed url will look like this: https://api.github.com/users/myusername/repos
4. Use the AJAX function to call the API. 
	- Be sure to use the loader gif provided while loading the results from the API call. You can find the loader in the index.html 
	- Make sure your code handles the error when no data is returned by the API
5. Loop through the data and append the data to the div with the id of results.
6. Use the empty function to clear previous data from the results div. This should clear the results each time
the button's event is fired.
*/

/* global $ */

$(document).ready(function () {
	$("#search").on("click", function () {
		$("#results").empty();
		var username = $("#username").val();
		var APIUrl = "https://api.github.com/users/" + username + "/repos";
		console.log(APIUrl);
		getRepo(APIUrl, username);
	});
});

function getRepo(apiURL, username) {
     $("#loader").css("display", "block");
    var html = "";
    $.ajax({
        url: apiURL,
        dataType: "json",
        success: function (returndata) {
            $("#loader").css("display", "none");
            if (returndata.message) {              
                $("#results").html("<h5><span class='glyphicon glyphicon-warning-sign glyph-style'></span> Error: " + returndata.message + "</h5>");
                $("#results").css("background-color", "#f14b4b");
            } else {
                console.log(returndata[0].owner.avatar_url)
                $("#results").append("<div><img width='200' class='js-gitAvatar media-object' alt='' style='margin:auto;margin-top:20px; margin-bottom:10px;border-radius: 50%;'/></div>");
                $("#results").css("background-color", "#eee");
                $.each(returndata, function (i, item) {
                    html += '<li>' +
                    '<h4><a href="' + this.html_url + '">' + this.name + '</a></h4>' +
                    '<ul>' +
                    '<li>' + 'Owner: ' + this.owner.login + '</li>' +
                    '<li>' + 'Description: ' + this.description + '</li>' +
                    '<li>' + 'Language: ' + this.language + '</li>' +
                    '<li>' + 'Updated: ' + this.updated_at + '</li>' +
                    '</ul>';
                    //$('.js-gitAvatar').attr('src', this.owner.avatar_url); 
                
                });
                $('.js-gitAvatar').attr('src', returndata[0].owner.avatar_url);    
                $('#results').append(html);              
            }  
        } 
    });

}