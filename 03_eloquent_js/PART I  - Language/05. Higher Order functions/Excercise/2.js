function loop(start, test, update, body) {      // A function that takes in four arguments
    for (let value = start; test(value); value = update(value)) {   
        body(value)
    }
}


loop(3, (c => c > 5), (n => n + 1), console.log)


/* 
Iterates over the start value. 
If the start value is poassed into the test function and it returns true, 
Then it is passed to the body function which logs it out, 
And then the update function works on the current value to create a new value which is again passed to the test function. 

But If the start value is passed to the test function and it returns false, then the program returns udefined.
*/