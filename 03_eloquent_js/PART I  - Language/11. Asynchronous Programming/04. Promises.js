//  - Working with abstract concepts is often easier when those concepts can be represented by values. 
//  - In the case of asynchronous actions, you could, instead of arranging for a function to be called at some point in the future,
//    return an object that represents this future event.


//  - This is what the standard class --Promise-- is for. 
//  - A promise is an asynchronous action that may complete at some point and produce a value. 
//  - It is able to notify anyone who is interested when its value is available.

let fifteen = Promise.resolve(15);                      // the promise has been resolved,and it provides the value 15.
fifteen.then(value => console.log(`Got ${value}`));     // Callback function.   Resolve Handler.
// -> Got 15

//  - The --then-- method can be used to get the result of a Promise.   (then returns a value when the promise has been fulfilled)
//  - This registers a callback function to be called when the promise resolves and produces a value.
//  - You can add multiple callbacks to a single promise, and they will be called, even if you add them after the promise has 
//    already resolved (finished).
//  - But that’s not all the --then-- method does. 
//  - It returns another promise, which resolves to the value that the handler function returns or, if that returns a promise, 
//    waits for that promise and then resolves to its result. 

//  - It is useful to think of promises as a device to move values into an asynchronous reality. 
//  - A normal value is simply there. A promised value is a value that might already be there or might appear at some 
//    point in the future.                          ############
//  - Computations defined in terms of promises act on such wrapped values and are executed asynchronously as the values become available.

//  - To create a promise, you can use Promise as a constructor. 
//  - It has a somewhat odd interface—the constructor expects a function as argument, which it immediately calls, passing it a 
//    function that it can use to resolve the promise. 
//  - It works this way, instead of, for example, with a resolve method, so that only the code that created the promise can resolve it.

//  - PROMISED-BASED INTERFACE FOR THE READ STORAGE FUNCTION
function storage(nest, name) { 
    return new Promise(resolve => { 
        nest.readStorage(name, result => resolve(result));
    }); 
}
storage(bigOak, "enemies")
        .then(value => console.log("Got", value));

//  - This asynchronous function returns a meaningful value. 
//  - promise-based functions look similar to regular ones: they take input as arguments and return their output. 
//  - The only difference is that the output may not be available yet.


