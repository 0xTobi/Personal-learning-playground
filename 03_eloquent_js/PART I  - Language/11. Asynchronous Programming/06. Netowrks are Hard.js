//  - Occasionally, there isn’t enough light for the crows’ mirror systems to transmit a signal
//  - As it is, that will just cause the callback given to send to never be called, which will probably cause the program to stop 
//    without even noticing there is a problem. 
//  - It would be nice if, after a given period of not getting a response, a request would time out and report failure.
//  - So while we’re at it, let’s make our request function automatically retry the sending of the request a few times before it gives up.

//  - And, since we’ve established that "promises are a good thing", we’ll also make our request function return a promise. 
//  - In terms of what they can express, callbacks and promises are equivalent. 
//  - Callback-based functions can be wrapped to expose a promise-based interface, and vice versa. 
//  - Even when a request and its response are successfully delivered, the response may indicate failure—for example, 
//    if the request tries to use a request type that hasn’t been defined or the handler throws an error. 
//  - To support this, send and defineRequestType follow the convention mentioned before, where the first argument passed to 
//    callbacks is the failure reason, if any, and the second is the actual result.


class Timeout extends Error {} 

function request(nest, target, type, content) { 
    return new Promise((resolve, reject) => { 
        let done = false; 
        function attempt(n) { 
            nest.send(target, type, content, (failed, value) => { 
                done = true; 
                if (failed) reject(failed); 
                else resolve(value);
            });
            setTimeout(() => { 
                if (done) return; 
                else if (n < 3) attempt(n + 1); 
                else reject(new Timeout("Timed out"));      // reject(reason)
            }, 250); 
        } 
        attempt(1); 
    });
}

//  - Because Promises can be resolved (or rejected) only once, this will work.--------------------------------------------------------------
//  - The first time resolve or reject is called determines the outcome of the promise, and any further calls, such as the timeout 
//    arriving after the request finishes or a request coming back after another request finished, are ignored.

//  - To build an asynchronous loop, for the retries, we need to use a recursive function—a regular loop doesn’t allow us to stop and 
//    wait for an asynchronous action. The attempt function makes a single attempt to send a request. 
//  - It also sets a timeout that, if no response has come back after 250 milliseconds, either starts the next attempt or, if this was 
//    the fourth attempt, rejects the promise with an instance of -Timeout- as the reason.


function requestType(name, handler) { 
    defineRequestType(name, (nest, content, source, callback) => {
        try {
            Promise.resolve(handler(nest, content, source)) 
            .then(response => callback(null, response), failure => callback(failure));
        } catch (exception) { 
            callback(exception);
        } 
    }); 
} 

//  - Promise.resolve is used to convert the value returned by handler to a promise if it isn’t already. Note that the call to 
//    handler had to be wrapped in a try block to make sure any exception it raises directly is given to the callback. 