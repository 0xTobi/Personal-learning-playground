//  - One approach to asynchronous programming is to make functions that perform a slow action take an extra argument, 
//    a --CALLBACK FUNCTION--.
//  - The action is started, and when it finishes, the callback function is called with the result.




//  - As an example, the --setTimeout-- function, available both in Node.js and in browsers, waits a given number of milliseconds 
//    (a second is a thousand milliseconds) and then calls a function.

setTimeout(() => console.log("Tick"), 500);        //  Waits for 500milliseconds, and then calls the arrow function.

//  - Waiting is not generally a very important type of work, but it can be useful when doing something like updating an animation or 
//    checking whether something is taking longer than a given amount of time.

//  - Performing multiple asynchronous actions in a row using callbacks means that you have to keep passing new functions to handle 
//    the continuation of the computation after the actions.

//  - A crow might store information about the places where it’s hidden food under the name "food caches", which could hold an array 
//    of names that point at other pieces of data, describing the actual cache. 
//  - To look up a food cache in the storage bulbs of the BigOak nest, a crow could run code like this:

import {bigOak} from "/.crow-tech";                 // "crow-tech" = habitat = seperate js file, "bigOak" = object = tree = specific module.
bigOak.readStorage("food caches", caches => {       // readStorage is a method that takes the "food caches" array and an additional action argument. It extracts informations about each elements of the "food caches" array and logs it out.
    let firstCache = caches[0];
    firstCache.readStorage(firstCache, info => {
        console.log(info);
    })
})

//  - This style of programming is workable, but the indentation level increases with each asynchronous action because you end up in 
//    another function.
//  - Crow nest computers are built to communicate using --request-response pairs--
//  - That means one nest sends a message to another nest, which then immediately sends a message back, confirming receipt and 
//    possibly including a reply to a question asked in the message.

//  - Each message is tagged with a --type--, which determines how it is handled. Our code can define handlers for specific request
//    types, and when such a request comes in, the handler is called to produce a response.

//  - The interface exported by the "./crow-tech" module provides callback based functions for communication. 
//  - Nests have a --send-- method that sends off a request. 
//  - It expects the "name" of the target nest, the "type" of the request, and the "content" of the request as its first three 
//    arguments, and it expects a "function to call" when a response comes in as its fourth and last argument.

bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",       // We have to define a request type that handles the "note" request type.
            () => console.log("Note delivered."));

//  - But to make nests capable of receiving that request, we first have to define a request type named --note--. 
//  - The code that handles the requests has to run not just on this nest-computer but on all nests that can receive messages 
//    of this type. 
//  - We’ll just assume that a crow flies over and installs our handler code on all the nests.

import {defineRequestType} from "./crow-tech";                      // Import the "defineRequestType" module from the crow-tech file.
defineRequestType("note", (nest, content, source, done) => {        // creates a "note" request type and add how it is to be handled.
    console.log(`${nest.name} received note: ${content}`); 
    done();                                                         // done is a callback that it must call when it is done with the request.
});

//  - The defineRequestType function defines a new type of request. 
//  - The example adds support for "note" requests, which just sends a note to a given nest. Our implementation calls console.log 
//    so that we can verify that the request arrived. 
//  - Nests have a --name-- property that holds their name.

//  - The fourth argument given to the handler, done, is a callback function that it must call when it is done with the request. 
//  - If we had used the handler’s return value as the response value, that would mean that a request handler can’t itself perform 
//    asynchronous actions. 

//  - A function doing asynchronous work typically returns before the work is done, having arranged for a callback to be called when 
//    it completes.                         #######################3
//  - So we need some asynchronous mechanism—in this case, another callback function—to signal when a response is available.


//  - "Asynchronicity is contagious. Any function that calls a function that works asynchronously must itself be asynchronous", 
//    using a callback or similar mechanism to deliver its result. 
//  - Calling a callback is somewhat more involved and error-prone than simply returning a value, so needing to structure large parts 
//    of your program that way is not great.



