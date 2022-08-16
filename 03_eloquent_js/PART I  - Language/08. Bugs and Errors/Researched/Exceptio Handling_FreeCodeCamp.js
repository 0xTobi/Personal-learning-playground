//  The "try" statement lets you test a block of code for errors.
//  The "catch" statement lets you handle the error.
//  The "throw" lets you create custom errors.
//  The "finally" statement lets execute code after try and catch regardless of the result.
//  NOTE!!!!! TRY CATCH ONLY HANDLES RUNTIME ERROR, AND NOT PARSETIME ERRORS That is the code has to be able to run for it to work. 

try {
    console.log("Sart of try runs");

    unicycle;

    console.log("End of try runs ---- Never reached")
}

catch(err) {
    console.log("Error has occured: " + err)
}

finally {
    console.log("This is always run")
}

console.log("....Then the execution continues")

//  - "Start of try runs" is logged to the console.
//  - "unicycle;" is not defined so the program runs into an error.
//  - immediately it runs into an error it ignores the stack and jumps to the --catch-- statement,
//  - We passed in an "err" object to the --catch-- statement. So when an error occurs, JavaScript generates an 
//    object containing the details about it.
//  - The "err" object has two main properties; "name" and "message"
//    The "name" is the -Reference error-, and the message is "Unicycle" is not defined.
//  - Whether or not an error occurs, we're going to always run the code in the --finally-- statement.
//  - At the end of "try, catch, finally" statements, execution continues.


//  There are many built in errors, but you can also create your own custom error message using --throw--
let JSON = '{"age" : 30}';

try {
    let user = JSON.parse(json);
    if(!user.name) {
        throw new SyntaxError("incomplete data: no name");
    }
    console.log(user.name)
}

catch(e) {
    console.log("JSON Error: " + e.message)
}

//  - If we're expecting the data from the server to have a name, but it doesn't. 
//    We're going to throw a new syntayError and put incomplete data: "No name".
//    So SyntaxError is going to be the "name" of the error, and "incomplete data: no name" is going to be the message of the error.
//  - if there was a name, the code would console.log the name out. But since there is not a name, as soon as it
//    throws the error message, it goes straight to the catch statement. 

