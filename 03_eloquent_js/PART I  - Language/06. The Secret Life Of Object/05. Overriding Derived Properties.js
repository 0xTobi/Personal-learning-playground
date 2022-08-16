//                                          OVERRIDING DEFAULT PROPERTIES


//  - When you add a property to an object, whether it is present in the prototype or not, 
//    the property is added to the object itself.
//  - If there was already a property with the same name in the prototype, this property will no longer affect
//    the object, as it is now hidden behind the object’s own property.

function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.teeth = "small";
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

console.log(killerRabbit.teeth)
//--> small
killerRabbit.teeth = "long, sharp and dirty";   // Defines a teeth property directly in the killerRabbit Object.
console.log(killerRabbit.teeth);    
//--> long, sharp and dirty
console.log(blackRabbit.teeth);
//--> small
console.log(Rabbit.prototype.teeth);
//--> small
 
//  Explanation
//  - killerRabbit.teeth = "long, sharp and bloody", overrides the teeth property in the Rabbit prototype.

//  - overriding can be used to express exceptional properties in instances of a more generic class of objects, 
//    while letting the nonexceptional objects take a standard value from their prototype.
//  - Overriding is also used to give the standard function and array prototypes a different toString method 
//  - than the basic object prototype.

console.log(Array.prototype.toString == Object.prototype.toString);
// → false 
console.log([1, 2].toString());
// → 1,2

console.log(Object.prototype.toString.call([1, 2])); 
// → [object Array]

//  - Calling toString on an array gives a result similar to calling .join(",") on it — it puts 
//    commas between the values in the array. 
//  - Directly calling Object.prototype.toString with an array produces a different string. 
//  - That function doesn’t know about arrays, so it simply puts the word --object-- and the 
//    name of the type between square brackets.

