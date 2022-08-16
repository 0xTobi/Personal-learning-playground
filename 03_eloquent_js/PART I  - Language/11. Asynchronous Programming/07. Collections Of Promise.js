//  - Each nest computer keeps an array of other nests within transmission distance in its neighbors property. 
//  - To check which of those are currently reachable, 
//    you could write a function that tries to send a """ping""" request (a request that simply asks for a response) to each of them 
//    and see which ones come back.

//  - PROMISE.ALL---------------------------------------------------------------------------------------------------------------------
//  - When working with collections of promises running at the same time, the Promise.all function can be useful. 
//  - It returns a promise that waits for all of the promises in the array to resolve and then resolves to an array of the 
//    values that these promises produced (in the same order as the original array). 
//  - If any promise is rejected, the result of Promise.all is itself rejected.  



requestType("ping", () => "pong");                      // Defines a request type and adds that it should just return "pong"
function availableNeighbors(nest) { 
    let requests = nest.neighbors.map(neighbor => { 
        return request(nest, neighbor, "ping")          // Doesn't take a "content" parameter, because it doesnt sends a message.
        .then(() => true, () => false);                 // request returns a promise, ".then" resolves the promise. Run first function if it was successful, else run the second if it was unsuccessful
    });
    return Promise.all(requests)                        // The map iterates over the elements of the neighbors array, testing each neighbor if they are reachable.
    .then(result => { 
        return nest.neighbors.filter((_, i) => result[i]);
    });
}


