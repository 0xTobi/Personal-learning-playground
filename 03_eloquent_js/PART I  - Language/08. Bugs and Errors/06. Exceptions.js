//  - When a function cannot proceed normally, what we would like to do is just stop what we are doing and 
//    immediately jump to a place that knows how to handle the problem. This is what ""exception handling"" does.

//  - Exceptions are a mechanism that makes it possible for code that runs into a problem to raise (or throw) an exception. 
//  - An exception can be any value. 

//  - Raising one somewhat resembles a "super-charged return" from a function: 
//    it jumps out of not just the current function but also its callers, all the way down to the first call 
//    that started the current execution. This is called ""unwinding the stack.""

//  - The power of exceptions lies in the fact that you can set “obstacles” along the stack to catch the exception
//    as it is zooming down. Once you’ve caught an exception, you can do something with it to address the problem 
//    and then continue to run the program.


function promptDirection(question) { 
    let result = prompt(question); 
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result); 
}

function look() { 
    if (promptDirection("Which way?") == "L") { 
        return "a house";
    } 
    else { 
        return "two angry bears";
    }
}

try { 
    console.log("You see", look()); 
} 
catch (error) {
    console.log("Something went wrong: " + error);
}

//  - The "throw" keyword is used to raise an exception. 
//  - Catching one is done by wrapping a piece of code in a "try" block, followed by the keyword "catch".
//  - When the code in the try block causes an exception to be raised, the catch block is evaluated, 
//    with the name in parentheses bound to the exception value. After the catch block finishes—
//    or if the try block finishes without problems—the program proceeds beneath the entire try/catch statement.
//  - We used the ""Error""" constructor to create our exception value. This is a standard JavaScript constructor 
//    that creates an object with a message property.
//    In most JavaScript environments, instances of this constructor also gather information about the call stack 
//    that existed when the exception was created, a so-called "stack trace". This information is stored in the 
//    stack property and can be helpful when trying to debug a problem: it tells us the function where the 
//    problem occurred and which functions made the failing call.
//  - Note that the look function completely ignores the possibility that promptDirection might go wrong.


console.log("CLEANING UP AFTER EXCEPTIONS")


const accounts = { 
    a: 100, 
    b: 0, 
    c: 20
};
function getAccount() { 
    let accountName = prompt("Enter an account name"); 
    if (!accounts.hasOwnProperty(accountName)) { 
        throw new Error(`No such account: ${accountName}`);
    } 
    return accountName; 
}
/*
function transfer(from, amount) { 
    if (accounts[from] < amount) return; 
    accounts[from] -= amount; 
    accounts[getAccount()] += amount;
}
*/
//  THIS IS A BAD CODE!! 
//  - But transfer first removes the money from the account and then calls getAccount before it adds it to 
//    another account. If it is broken off by an exception at that point, it’ll just make the money disappear.

//  - Let's rewrite the transfer function more intelligently. 
//    for example by calling getAccount before it starts moving money around.
function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;

        accounts[getAccount()] += amount;
        progress = 2;
    }
    finally {
        if (progress == 1) {
            accounts[from] += amount
        }
    }
}

//  - This version of the function tracks its progress, and if, when leaving, it notices that it was aborted 
//    at a point where it had created an inconsistent program state, it repairs the damage it did. 
//  - Note that even though the finally code is run when an exception is thrown in the try block, it does not 
//    interfere with the exception. After the finally block runs, the stack continues unwinding.





