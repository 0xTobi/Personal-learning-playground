//  - Once you notice there is something wrong with your program because it misbehaves or produces errors, 
//    the next step is to figure out what the problem is.


//  SOMETHING IS WRONG WITH THIS CODE
function numberToString(n, base = 10) { 
    let result = "", sign = ""; 
    if (n < 0) { 
        sign = "-"; 
        n = -n;
    } 
    do {
        result = String(n % base) + result; 
//      n /= base; (wrong)
        n = Math.floor(n / base);
    } 
    while (n > 0); 
    return sign + result;
}
console.log(numberToString(13, 10));
//  - We know that our program is malfunctioning, and we want to find out why.
//    This is where you must resist the urge to start making random changes to the code to see whether that makes it better. 
//    Instead, THINK. ANALYZE what is happening and come up with a theory of why it might be happening.
//    Then, make additional observations to test this theory—or, if you don’t yet have a theory,
//    make additional observations to help you come up with one.

//  - Putting a few strategic console.log calls into the program is a good way to get additional information 
//    about what the program is doing. In this case, we want n to take the values 13, 1, and then 0. 
//    Let’s write out its value at the start of the loop.
//  - 13
//  - 1.3
//  - 0.13
//  - 0.013
//  - ...
//  - 1.5e-323
//  - Right. Dividing 13 by 10 does not produce a whole number. 
//  - Instead of "n /= base", what we actually want is "n = Math.floor(n / base)"" so that the number is properly “shifted” to the right.

//  - Another way to set a breakpoint is to include a debugger statement (consisting of simply that keyword) in your program. 
//    If the developer tools of your browser are active, the program will pause whenever it reaches such a statement.






