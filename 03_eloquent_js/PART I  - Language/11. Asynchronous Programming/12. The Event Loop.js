// - Asynchronous programs are executed piece by piece. Each piece may start some actions and schedule code to be executed when the 
//   action finishes or fails. In between these pieces, the program sits idle, waiting for the next action.
// - So callbacks are not directly called by the code that scheduled them.
// - Asynchronous behavior happens on its own empty function call stack. This is one of the reasons that, without promises, managing 
//   exceptions across asynchronous code is hard.


try { 
    setTimeout(() => { 
        throw new Error("Woosh");
}, 20);
} catch (_) {
    // This will not run 
    console.log("Caught!");
}


// - No matter how closely together events(such as timeouts or incoming requests) happen, a JavaScript environment will run only 
//   one program at a time. You can think of this as it running a big loop around your program, called the event loop. 
// - When there’s nothing to be done, that loop is stopped. But as events come in, they are added to a queue, and their code is 
//   executed one after the other.
// -  Because no two things run at the same time, slow-running code might delay the handling of other events.

//  - This example sets a timeout but then dallies until after the timeout’s intended point of time, causing the timeout to be late.

let start = Date.now(); 
setTimeout(() => { 
    console.log("Timeout ran at", Date.now() - start);
}, 20);
while (Date.now() < start + 50) {} 
console.log("Wasted time until", Date.now() - start); 


//  - Promises always resolve or reject as a new event.

Promise.resolve("Done").then(console.log); 
console.log("Me first!");


