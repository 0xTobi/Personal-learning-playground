//  - Regular JavaScript computations can fail by throwing an exception. Asynchronous computations often need something like that. 
//  - A network request may fail, or some code that is part of the asynchronous computation may throw an exception.

//  - One of the most pressing problems with the callback style of asynchronous programming is that it makes it extremely difficult 
//    to make sure failures are properly reported to the callbacks.

//  - A widely used convention is that the first argument to the callback is used to indicate that the action failed, 
//    and the second contains the value produced by the action when it was successful. 

//  - Promises make this easier. 
//  - They can be either resolved (the action finished successfully) or rejected (it failed). 
//  - Resolve handlers (as registered with "then") are called only when the action is successful, 
//    and rejections are automatically propagated to the new promise that is returned by "then". 
//  - And when a handler throws an exception, this automatically causes the promise produced by its "then" call to be rejected. 
//  - So if any element in a chain of asynchronous actions fails, the outcome of the whole chain is marked as rejected, 
//    and no success handlers are called beyond the point where it failed.      ###############################################

//  - Much like resolving a promise provides a value, rejecting one also provides one, usually called the reason of the rejection.
//  - Similarly, when a handler returns a promise that is rejected, that rejection flows into the next promise. 
//  - There’s a --Promise.reject-- function that creates a new, immediately rejected promise.


new Promise((_, reject) => reject(new Error("Fail")))   
    .then(value => console.log("Handler 1"))    
    .catch(reason => { console.log("Caught failure " + reason); 
    return "nothing";
    }) 
    .then(value => console.log("Handler 2", value));

//  EXPLANATION 
//  - Create a promise object which takes one parameter, a function, which gets passed two variables. ((resolve, reject))
//    in this case resolve has been ignored.
//  - The reject variable is a function variable that gets assigned an error object. 
//  - The resolve(.then) branch is not entered at first because an error is generated, so it enters the reject(.catch) branch.
//  - The .catch branch calls console.log, and returns another promise.
//  - That returned promise is then resolved(.then) passing the value it created("nothing") into it.


