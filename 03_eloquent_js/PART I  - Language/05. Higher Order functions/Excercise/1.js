function flatten(arrays) {
    let flat = [];
    for (let array of arrays) {
        flat.push(array.reduce((first, second) => first + ", " + second));
    }
    return flat
}

console.log(flatten([["Tobi", "Aderibigbe"], ["Urum", "Uche"], ["Akinsola", "Olumide"]]).join(", "));

// Actual answer
let array = [[1,2,3], [3,2,7], [9,5]];

console.log(array.reduce((newArray, element) => newArray.concat(element), []));