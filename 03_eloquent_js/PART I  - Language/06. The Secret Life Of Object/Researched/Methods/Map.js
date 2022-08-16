//  MAP     ||      set, get and has
let ages = new Map(); 
ages.set("Boris", 39); 
ages.set("Liang", 22); 
ages.set("Júlia", 62);
console.log(`Júlia is ${ages.get("Júlia")}`); 
// → Júlia is 62 
console.log("Is Jack's age known?", ages.has("Jack")); 
// → Is Jack's age known? false 
console.log(ages.has("toString"));
// → false


//  - Calling toString on an array gives a result similar to calling .join(",") on it — it puts 
//    commas between the values in the array. 


