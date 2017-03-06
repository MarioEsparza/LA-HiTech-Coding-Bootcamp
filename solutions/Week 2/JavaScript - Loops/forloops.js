// JavaScript File
function loopsF() {
    var stringLoop = "Loop 1:\n";
    for(var i = -10; i < 20; i++){
        stringLoop += i + ", ";
    }
    stringLoop += "\nLoop 2:\n";
    for (var i = 10; i < 40; i+3){
            stringLoop += i + ", ";
    }
    stringLoop += "\nLoop 3:\n";
     for (var i = 300; i < 330; i++){
        stringLoop += i + ", ";
    }
     stringLoop += "\nLoop 4:\n";
    for (var i = 5; i < 50; i++){
        if((i % 5 == 0) && (i % 3 == 0)){
            stringLoop += i + ", ";
        }
    }
    alert(stringLoop);
}
