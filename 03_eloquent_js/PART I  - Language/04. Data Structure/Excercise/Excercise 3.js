
//      ARRAY TO LIST
function arrayToList(array) {
    let list = null         // Declares an empty list
    for (let i = array.length - 1; i >= 0; i--) {       // Iterates over the values in the array.
        list = {value: array[i], rest: list}            // Stores the current value in the list.value property and stores the remaining list in the list.rest property.  
    }
    return list
}

//      LIST TO ARRAY
function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value)
    }
    return array;
}

//      PREPEND
function prepend(value, list) {
    return {value, rest: list}
}

console.log(arrayToList([1,2,3,4,5]));
console.log(listToArray(arrayToList([1,2,3])));
console.log(prepend(4, arrayToList(1,2,3)))






















