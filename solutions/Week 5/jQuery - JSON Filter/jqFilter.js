/* Week 5 - Lab 8 |  Mario Esparza*/

$( document ).ready(function() {
    var jsonData = jsonReturn();
    var selection;

    $('#filter').change(function(){ 
        selection = $("#filter option:selected").val();
        var cssSelect = $("#filtercss option:selected").val();
        $("#tbl").empty();
        if (selection) {
            $("#msg").css("visibility", "hidden");
            displayData(selection, jsonData);       
            setCSS(cssSelect);
        } else {
            $("#msg").css("visibility", "visible");
        }
    });
    
    $('#filtercss').change(function () {
        selection = $("#filtercss option:selected").val();
        console.log(selection);
        setCSS(selection);
    });
});

function displayData(selection, jsonData) {
    var tableHeader = selection;
    $("#tbl").append("<tr><th>" + tableHeader + "</th></tr>");
    $.each(jsonData, function (i, data) {
        if (selection == "name") {
            $("#tbl").append("<tr><td>" + data.name + "</td><tr>");
        } else if (selection == "age") {
            $("#tbl").append("<tr><td>" + data.age + "</td><tr>");
        } else {
            $("#tbl").append("<tr><td>" + data.address.street + " " + data.address.zip + " " + data.address.city + "</td> <tr>");
        }
    })
}

function setCSS(selection) {
    if(selection == "wb"){
        $("#tbl").children().addClass("classtd");
    } else {
        $("#tbl").children().removeClass("classtd");
    }

}
function jsonReturn() {
    var data = [
{
    "name": "bob", "age": 35,
    "address": {
        "street": "6565 sunset blvd",
        "zip": "90028", "city": "Los Angeles"
    }
},
{
    "name": "angela", "age": 25,
    "address": {
        "street": "1234 Tropicana blvd",
        "zip": "89100", "city": "Las Vegas"
    }
},
{
    "name": "carol", "age": 52,
    "address": {
        "street": "4232 melrose ave",
        "zip": "90029", "city": "Los Angeles"
    }
},
{
    "name": "jack", "age": 63,
    "address": {
        "street": "1344 first street",
        "zip": "90105", "city": "Las Vegas"
    }
},
{
    "name": "celine", "age": 21,
    "address": {
        "street": "1344 first street",
        "zip": "10003", "city": "New York"
    }
},
{
    "name": "Luke", "age": 74,
    "address": {
        "street": "1344 first street",
        "zip": "10105", "city": "Bronx"
    }
},
{
    "name": "martin", "age": 55,
    "address": {
        "street": "1344 first street",
        "zip": "10108", "city": "Bronx"
    }
}
    ];

    return data;

}