// FUNCTION THAT CREATES NEW FUNCTIONS

function greaterThan(n) {       // Defines a function that returns another function.
    return m => m > n;          // Defines a function value inside the greaterThan function. - When the outer function is invoked, it only returns the inner function. And "n" is stired as a closure in the return function.
}

let check = greaterThan(5)
check(2)

var greaterThan10 = greaterThan(10)     // The outer function is invoked once. When the outer function completes execution(it returns the inner function), the variable n ceases to exist in the outer function, but is preserved by the inner function as a closure: n = 10.
console.log(greaterThan10(11))      // The inner function is executed and it tries to evaluate (m > n) where argument m has been assigned a value of 11, but n is not defined inside it's function scope. Remember it preserved the variable n = 10 as a closure when the outer function was executed. So it can evaluate (m > n) 


// FUNCTIONS THAT CHANGE OTHER FUNCTIONS  || The noisy function acts on the "args" function value.

function noisy(f) {                                                     // Defines a function that returns another function when it is invoked. When this function finishes execution, the argument f no longer exists in this function's scope, but it's preserved in the inner function as a closure.
    return (...args) => {                                               // Defines an "...args" function value inside the noisy function that accepts any amount of expression (i.e [1, 2, 3, 4,....]). The function does the following;
        console.log("calling with", args);
        let result = f(...args);                                        // Remember the whatever value given to argument f, is stored as a closure in this function.
        console.log("called with", args, ", returned", result);         // Logs, called with (1, 2, 3, 4), returned 1.
        return result;                                                  // Returns 1
    };
}

var X = noisy(Math.max);
noisy(Math.min)(3,2,1);
X(5,34,67,3,23,65)


// FUNCTIONS THAT PROVIDES NEW TYPE OF CONTROL FLOW.

function repeat(n, action) {        // A function that takes two arguments. One is a number value that signifies how many times the repeat function should be invoked, and the other is a function.
    for (let i = 0; i < n; i++) {   
        action(i);                  // invokes the function given as the second arguement. with current i value as an argument.
    }
}
function unless(test, then) {       // A function that takes two arguments. One is an expression which is evaluated, and the second is a function.
    if (!test) then();              // If the evaluated expression produces a false boolean value, invoke the function passed to the "then" argument.
}   

repeat(3, n => {                    // The repeat function is invoked 3 times (0,1,2), with an increasing i value on each execution. The second argument which is a function is then invoked with an argument of the current i value.
    unless(n % 2 == 1, () => {      // 
        console.log(n, "is even");  // 
    });
});