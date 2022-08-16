// - This ability of functions to be paused and then resumed again is not exclusive to async functions. 
// - JavaScript also has a feature called generator functions. These are similar, but without the promises. 
// - When you define a function with function* (placing an asterisk after the word function), it becomes a generator. 
// - When you call a generator, it returns an iterator, 

function* powers(n) { 
    for (let current = n;; current *= n) { 
        yield current;
    } 
}

for (let power of powers(3)) { 
    if (power > 50) break; 
    console.log(power);
}

// - Initially, when you call powers, the function is frozen at its start. 
// - Every time you call next on the iterator, the function runs until it hits a yield expression, which pauses it and causes the 
//   yielded value to become the next value produced by the iterator. 
// - When the function returns (the one in the example never does), the iterator is done.
// - Writing iterators is often much easier when you use generator functions.

Group.prototype[Symbol.iterator] = function*() { 
    for (let i = 0; i < this.members.length; i++) { 
        yield this.members[i];
    }
};

// let result = {                                       // Object that holds the iteration state.
//     value: this.group.members[this.position],
//     done: false
// };

//  - There’s no longer a need to create an object to hold the iteration state— generators automatically save their local state every 
//    time they yield. 
//  - Such yield expressions may occur only directly in the generator function itself and not in an inner function you define
//    inside of it. The state a generator saves, when yielding, is only its local environment and the position where it yielded.


