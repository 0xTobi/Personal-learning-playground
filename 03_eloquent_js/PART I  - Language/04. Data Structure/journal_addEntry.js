// A journal with two properties.
// It accepts values into the property with the aid of "addEntr" function.

let journal = [] // Empty journal book
function addEntry(events, squirrel) {
    journal.push(events, squirrel); //this expression pushes values into the property names.
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false)     // journal[0]
addEntry(["work", "ice cream", "cauli flower", "lasasgna", "touched tree", "brushed teeth"], false)     // journal[1]
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true)      // journal[2]

console.log(journal)



