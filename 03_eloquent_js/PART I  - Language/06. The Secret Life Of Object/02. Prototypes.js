/*                                                  PROTOTYPES
A prototype is another object that is used as a fallback source of properties. 
When an object gets a request for a property that it does not have, its prototype will be searched for the property, 
then the prototype’s prototype, and so on. 
*/



let empty = {}; 
console.log(empty.toString); 
// → function toString(){...} 
console.log(empty.toString());
// → [object Object]



//  - The prototype relations of JavaScript objects form a tree-shaped structure, and at the root of this structure sits Object.prototype.
//  - Many objects don’t directly have Object.prototype as their prototype but instead have another object that provides a -
//  - different set of default properties.
//  - Functions derive from Function.prototype, and arrays derive from Array.prototype.
//  - Such a prototype object will itself have a prototype, often Object.prototype, 
//    so that it still indirectly provides methods like toString.
console.log(Object.getPrototypeOf({}) == Object.prototype);
//--> true
console.log(Object.getPrototypeOf(Object.prototype)) ;
//--> null

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);     // Math.max is a function.
//--> true
console.log(Object.getPrototypeOf([]) == Array.prototype);              // [] is an empty array.
//--> true



// You can use "Object.create" to create an object with a specific prototype.
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
};
let killerRabbit = Object.create(protoRabbit);  //  An object(killerRabbit) that derives from the specified prototype(protoRabbit)
killerRabbit.type = "killer";
killerRabbit.speak('SKREEEE') 
//  Explanation
//  - The "protoRabbit" acts as a container for the properties that are shared by all rabbits.
//  - An individual rabbit object, like killerRabbit, contains properties that applies only to itself --type-- in this case,
//   and derives shared properties from its prototype.
//  - speak(line) in an OBJECT expression is a shorthand way of defining a method. It creates a property speak and gives it a function as its value.


//                                                     ASIDE
//  - The killerRabbit object is an onject that contains a --type-- property, 
//    and a prototype object property --protoRabbit-- which contains a method. 
