/* Week 3 - Lab 7 |  Mario Esparza*/


function functions() {
    
    var factResult;
    if(isEven()){
        console.log("EVEN = TRUE");
    }else{
         console.log("EVEN = FALSE");
    }
   
    factResult = factorial();
     console.log("FACTORIAL: ", factResult);
     
     console.log(kebabToSnake());
}

function isEven (){
    var input = document.getElementById("even").value;
    if(input % 2 == 0){
        return true;
    }
     return false;
}

function factorial (){
    var input = document.getElementById("factorial").value;
    var result = input;
    for(var i = 1; i < input; input--){
        result = result * (input - 1)
    }
    return result;
}

function kebabToSnake(){
     var input = document.getElementById("ktos").value;
     return input = input.replace(/-/g, "_");
     
}