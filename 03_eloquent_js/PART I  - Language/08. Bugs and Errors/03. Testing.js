//  - If the language is not going to do much to help us find mistakes, we’ll have to find them the hard way: 
//    by running the program and seeing whether it does the right thing.
//  - Automated testing is the process of writing a program that tests another program.
//  - Tests usually take the form of little labeled programs that verify some aspect of your code. 

function test(label, body) {
    if (!body()) console.log(`failed: ${label}`);
}

test("convert Latin text to uppercase", () => { 
    return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", () => { 
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});
test("don't convert case-less characters", () => { 
    return "你好".toUpperCase() == "你好";
});
//  - Writing tests like this tends to produce rather repetitive, awkward code. 
//    Fortunately, there exist pieces of software that help you build and run collections of tests (test suites) 
//    by providing a language (in the form of functions and methods) suited to expressing tests and by outputting 
//    informative information when a test fails. These are usually called (test runners).



