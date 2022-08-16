// MORE METHODS
// Properties that contain functions are generally called methods of the value they belong to.

let todoList = [];                     // An empty to-do list
function remember(task) { 
    todoList.push(task);               // Pushes tasks into the to-do list array
}




function getTask() { 
    return todoList.shift();           //  Gets and removes the first item from the left from the todoList.
}
function rememberUrgently(task) { 
    todoList.unshift(task);            // Adds an item from the left side of the todoList.
}




function search(task) {
    console.log(todoList.indexOf(task));  // Finds the index of an item in the todoList array. If the item cannot be found in the array it returns "-1"
}
// e.g
// console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1

function search(task) {
    console.log(todoList.lastIndexOf(task));  // Finds the index of an item in the todoList array starting form the right of the array.
}
// e.g
// console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3




console.log([0, 1, 2, 3, 4].slice(2, 4));       // Takes start and end indices and returns an array that has only the elements between them. The start index is inclusive, and the end index is exclusive.
// → [2, 3] 


console.log([0, 1, 2, 3, 4].slice(2));          // When the end index is not given, slice takes all the elements after the start index.
// → [2, 3, 4]




function remove(array, index) {             // Declares an array and an index.
    return array.slice(0, index)            // slice array from [0] to the supplied [index] 
        .concat(array.slice(index + 1));    // ".concat" slice array from [index + 1] 
}

// console.log(remove(["a", "b", "c", "d", "e"], 2));  // array.slice(0, 2) gives [0]"a", [1]"b"and omits [2]"c", then array.slice(2 + 1) gives the items from [3] upwards. The .concat method method glues arrays together.
// → ["a", "b", "d", "e"]




