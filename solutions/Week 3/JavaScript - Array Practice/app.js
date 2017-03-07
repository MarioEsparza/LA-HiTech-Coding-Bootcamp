// JavaScript File

function arraySet () {
    var array1 = [11232,212,21,3];
    var uniform;
    console.log("Print Reverse:\n");
    printReverse(array1);
    uniform = isUniform(array1);
    console.log("All Same: ", uniform);
    var sum = sumArray(array1);
    console.log("Add Array: ", sum);
    var max = maxNum(array1);
    console.log("Max Number: ", max);
}

function printReverse (array){
    var arrSize = array.length;

    for(var i = array.length; i > 0; i--){
        console.log("-> " + array[i-1]);
    }
}

function isUniform (array) {
    for(var i = 0; i < array.length; i++) {
        if(array[0] != array[i]){
            return false
        }
    }
    return true;
}

function sumArray (array) {
    var result = 0;
    for(var i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result
}

function maxNum (array) {
    var max = 0;

    for(var i = 0; i < array.length; i++){
        if(i==0){
              if(array[i] >= array[i+1]){
                    max = array[i]
            }else{
                    max = array[i+1];
            }
    }
        if(array[i] > max){
          max = array[i];
      }
    }
    return max;
}