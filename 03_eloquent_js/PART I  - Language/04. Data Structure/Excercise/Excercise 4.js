function deepEqual(a, b) {
    if (a === b) return true;       // If a is exactly equal to b. Return True.

    if (a == null || typeof a != "object" || b == null || typeof b != "object")  return false       // If a or b is null or not an object. Return false.

    let keysA = Object.keys(a), keysB = Object.keys(b);     // Object.keys(a) is used to extract the property names of the object a into an array.

    if (keysA.length != keysB.length) return false;     // If the length of the keysA array isn't equal to the length of keysB array. Return false
    
    for (let key of keysA) {        // loop over each expression in the keysA array.
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;       // If the keysB array does not include the current key in key A or if a[key] is not exactly equal to b[key]. Return false.
    }

    return true
}

let obj = {
    name: {
        first: "Tobi", 
        second: "Aderibigbe"
    },
    age: 13
}

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, 2));
console.log(deepEqual(obj, {name: {first: "Tobi", second: "Aderibigbe"}}));
console.log(deepEqual(obj, {name: {first: "Tobi", second: "Aderibigbe"}, age: 13}));