
//      MY ANSWER
let object = {
   [hasOwnProperty]: "this",
   name: "tobi"
}

object[hasOwnProperty]


//      ACTUAL ANSWER
let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true


