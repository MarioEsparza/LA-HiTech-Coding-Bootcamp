/* Week 6 - Lab 9 |  Mario Esparza*/

$(document).ready(function() {
    $("#submit").on("click", function(event) {
 
        event.preventDefault();
        var index = data.findIndex(item => item.name == $("#Name").val().charAt(0).toUpperCase() + $("#Name").val().slice(1));
        if (index != -1) {
            updateData(index);
        }
        else {
            addNewData();
        }
        $(this).closest('form').find("input[type=text], textarea").val("");
    });
     $("#clear").on("click", function() {
        $("table").empty();
    });

});

function updateData(index) {
    data[index].name = $("#Name").val();
    data[index].age = $("#Age").val();
    data[index].address.street = $("#Street").val();
    data[index].address.zip = $("#Zip").val();
    data[index].address.city = $("#City").val();
    displayData();
}

function addNewData() {
    data.push({
        "name": $("#Name").val(),
        "age": $("#Age").val(),
        "address": {
            "street": $("#Street").val(),
            "zip": $("#Zip").val(),
            "city": $("#City").val()
        }
    });
    displayData();
}

function displayData() {
    $("table").empty();
    $("#tbl").append("<tr><th>Name</th><th>Age</th><th>Street</th><th>Zip</th><th>City</th></tr>");
    $.each(data, function(i, data) {
        $("#tbl").append("<tr><td>" + data.name + "</td><td>" + data.age + "</td><td>" + data.address.street + "</td><td>" + data.address.zip + "</td><td>" + data.address.city + "</td><tr>");
    })
}

/* global $ */
var data = [{
    "name": "Bob",
    "age": 35,
    "address": {
        "street": "6565 Sunset Blvd",
        "zip": "90028",
        "city": "Los Angeles"
    }
}, {
    "name": "Angela",
    "age": 25,
    "address": {
        "street": "1234 Tropicana blvd",
        "zip": "89100",
        "city": "Las Vegas"
    }
}, {
    "name": "Carol",
    "age": 52,
    "address": {
        "street": "4232 Melrose ave",
        "zip": "90029",
        "city": "Los Angeles"
    }
}, {
    "name": "Jack",
    "age": 63,
    "address": {
        "street": "1344 First Street",
        "zip": "90105",
        "city": "Las Vegas"
    }
}, {
    "name": "Celine",
    "age": 21,
    "address": {
        "street": "1344 First Street",
        "zip": "10003",
        "city": "New York"
    }
}, {
    "name": "Luke",
    "age": 74,
    "address": {
        "street": "1344 first street",
        "zip": "10105",
        "city": "Bronx"
    }
}, {
    "name": "Martin",
    "age": 55,
    "address": {
        "street": "1344 first street",
        "zip": "10108",
        "city": "Bronx"
    }
}];
