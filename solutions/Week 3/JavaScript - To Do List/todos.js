// JavaScript File
var list = [];

function add (){
    var itemNew = prompt("Add new item to list:");
    list.push(itemNew);
}

function listTo () {
    var stringToPrint = "To Do List: \n";
    if(!(list.length)){
        alert("Empty List!")
    }else{
            for(var i = 0; i < list.length; i++){
        stringToPrint +="-> " + i + ": " + list[i] + "\n";
    }
    alert(stringToPrint);
    }
}

function remove() {
    var itemDel = prompt("Delete To Do: (Enter a number)");
    list.splice(itemDel, 1);
}

function quit() {
    alert("The list has been deleted. Thank You Come Again!");
     list.splice(0, list.length);
}