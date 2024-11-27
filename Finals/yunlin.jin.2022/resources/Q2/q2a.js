/*
    Name: Jin Yun Lin
    Email: yunlin.jin.2022
*/

function sumOfNumbers(data) {
    let sum = 0
    
    for (let element of data) {
        sum += getNumber(element)
    }
   
    return sum
}

// You are to debug this function only
/**
 * @param element 
 * @return number
**/
function getNumber(element) {
   
    if ( element == null || element == undefined || typeof element === "function" ) {

        return 0

    } else if (typeof element === "string") {

        let val = Number(element)

        return val
    
    } else if (typeof element === "number") {

        return Number(element);

    }  else if (typeof element === "boolean") {

        if (element == true){
            return 1;
        } else if (element == false) {
            return 0;
        } else {
            return Number(element);
        }

    } else if (Array.isArray(element)) {

        sumOfNumbers(element)

    } else if (typeof element === "object") {   

        for (x in element){
            return x;
        }
        // return element

    }
    return 0
}