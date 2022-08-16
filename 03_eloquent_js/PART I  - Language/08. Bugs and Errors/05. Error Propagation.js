//  - Not all problems can be prevented by the programmer, unfortunately. 
//  - If your program communicates with the outside world in any way, it is possible to get malformed input, 
//    to become overloaded with work, or to have the network fail.

//  - Say you have a function promptInteger that asks the user for a whole number and returns it. 
//    What should it return if the user inputs “orange?” 
//    One option is to make it return a special value. Common choices for such values are null, undefined, or -1.

function promptNumber(question) {
    let result = Number(prompt(question));
    if (Number.isNaN(result)) {
        return null
    }
    else {
        return result
    }   
}

console.log(promptNumber("How many trees can your papa see?"))
//  Now any code that calls promptNumber must check whether an actual number was read and, failing that, 
//  must somehow recover maybe by asking again or by filling in a default value.


function lastElement(array) { 
    if (array.length == 0) { 
        return {failed: true};
    } 
    else { 
        return {element: array[array.length - 1]};
    }
}
//  - What if the function can already return every possible kind of value? In such a function, 
//    you’ll have to do something like wrap the result in an object to be able to distinguish success from failure.

