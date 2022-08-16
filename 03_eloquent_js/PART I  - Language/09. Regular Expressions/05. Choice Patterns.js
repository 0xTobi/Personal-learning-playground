//  - Say we want to know whether a piece of text contains not only a number but a number followed by one of the words 
//   pig, cow, or chicken, or any of their plural forms.
//  - The pipe character (|) denotes a choice between the pattern to its left and the pattern to its right

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/; 
console.log(animalCount.test("15 pigs"));

console.log(animalCount.test("15 pigchickens"));

//  - Parentheses can be used to limit the part of the pattern that the pipe operator applies to, 
//    and you can put multiple such operators next to each other to express a choice between more than two alternatives.

