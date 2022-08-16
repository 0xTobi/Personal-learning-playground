function reverse(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {   // We subtracted 1 from array.length because say indexing starts from "0", while [a,b,c] is indexed [0,1,2], array.length for [a,b,c] produces "3". So we have to subtract 1 from whatever the array.length is, to get the exact end index of the last expression in the array.
        reversed.push(array[i])
    }
    return reversed
}

console.log(reverse([1,2,3,4,5,6,7,8,9]))

//      Part 2
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {   
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}
let arrayValue = [1,2,3,4,5];
reverseArrayInPlace(arrayValue);

console.log(arrayValue);