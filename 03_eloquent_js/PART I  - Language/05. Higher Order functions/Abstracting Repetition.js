function repeat(n, action) { // Takes a function as an argument (action)
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
let labels = []; // Declares an empty array
repeat(5, i => { // makes a call to the repeat function declared earlier. Let i be such that;
    labels.push(`Unit ${i + 1}`); // for every i gotten from the repeat function's for loop, push `unit ${i + 1}` into the array. "i + 1" here so that when i is being pushed into the array it does'nt start from "0" (e.g,  'unit 0'), but starts from 1. Just to make more sense.
});
console.log(labels);

//  A simple Loop
function loopMe(array) {
    let reduced = array.reduce(i => i > 5)
    return reduced
}

loopMe([1, 2, 3, 4, 5, 6, 7, 7, 8, 0])