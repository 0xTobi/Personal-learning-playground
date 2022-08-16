function outer() {      // an outer function
    var b = 10;         // with variable b, and returns the inner function.
    function inner() {  
        var a = 20;     
        console.log(a + b);     
    }
    return inner;       // Looks for a variable called inner, finds that this variable iner is actually a function, and so returns the entire body of the inner function.
}                       // The inner function is not executed, its entire body is just returned.

var X = outer();        // The contents returned by the return statement when first invoked are stored in X. That is X is a function.
var Y = outer();        // The contents returned by the return statement when invoked a second time are stored in Y. That is Y is a function.

console.log(X)          // This displays the function body of X. Basically the inner function.

// In Javascript a function is executed by adding () after the function name. So:

X() // X() invoked the first time
X() // X() invoked the second time
X() // X() invoked the third time
Y() // Y() invoked the first time




//                              LETS ADD SOME CHANGES TO FURTHER UNDERSTAND CLOSURES
function outer() {
    var b = 20;
    var c = 100;        // Variable c is not included in the function scope of the inner() function so it's value ceases to exist once the outer() function completes execution.
    function inner() {
        var a = 10;
        console.log("a= " + a + " b= " + b);    // encloses the variable b from the outer function, hence preserves the variable b=10 even after the outer function completes execution.
        a++         // a + 1
        b++         // b + 1
    }
    return inner;
}

var X = outer();    // outer() invoked first time.
var Y = outer();    // outer() invoked second time.

X()     // a= 10 b= 20    -   a is created anew, b is from the closure value b(first_time), a and b are incremented by 1.
X()     // a= 10 b= 21    -   a is created anew, b is from the closure value b(first_time) which has been previously incremented by 1, a and b are incremented by 1 again.
X()     // a= 10 b= 22    -   a is created anew, b is from the closure value b(first_time) which has been previously incremented by 1 twice, a and b are incremented by 1 again.
X()     // a= 10 b= 23    -   a is created anew, b is from the closure value b(first_time) which has been previously incremented by 1 thrice, a and b are incremented by 1 again.
Y()     // a= 10 b= 20    -   a is created anew, b is from the closure value b(second_time), a and b are incremented by 1.
Y()     // a= 10 b= 21    -   a is created anew, b is from the closure value b(second_time) which has been previously incremented by 1, a and b are again incremented by 1.


function padNumber(cows, chickens) {
    let cowString = String(cows)
    let chickenString = String(chickens)
    if (cowString.length <= 2) {
        cows = "0" + cow;
    }
    if (chickenString.length <= 2) {
        chickens = "0" + chickens;
    }
    console.log (cowString)
    console.log(chickenString)
}







function range(start, end) {
    let numbers = []
    if (start < end) {
        for (let i = start; i <= end; i++) {
            numbers.push(i)
        }
    } else {
        for (let i = start; i >= end; i--) {
            numbers.push(i)
        }
    }
    return numbers
}

function max(numbers) {
    let current = 0;
    for (let x of numbers) {
        if (x > current) {
            current = x
        }
    }
    return current
}




function countBs(string) {
    let match = [];
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === "B") {
            match.push(string[i]);
        }
    }
    console.log(match);
    return match.length;
}

function countLetter(string, letter) {
    let count = 0
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === letter) {
            count += 1
        }
    }
    return count;
}