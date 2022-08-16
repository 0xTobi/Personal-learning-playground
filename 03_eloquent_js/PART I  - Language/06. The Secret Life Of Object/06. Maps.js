//                                                  MAPS
//  A map (noun) is a data structure that associates values (the keys) with other values.


let ages = { 
    Boris: 39, 
    Liang: 22, 
    Júlia: 62
};
console.log(`Júlia is ${ages["Júlia"]} years old`); 
// → Júlia is 62 
console.log("Is Jack's age known?", "Jack" in ages); 
// → Is Jack's age known? false 
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

//  - we certainly didn’t list anybody named --toString-- in our map. Yet, because plain objects derive from 
//    Object.prototype, it looks like the property is there.
//  - As such, using plain objects as maps is dangerous. 
//  - If you pass --null-- to Object.create, the resulting object will not derive from Object.prototype 
//    and can safely be used as a map.

console.log("toString" in Object.create(null)); 
// → false


//  - Object property names must be strings. If you need a map whose keys can’t easily be converted to strings—
//    such as objects—you cannot use an object as your map.
//  - JavaScript comes with a class called --Map-- that is written for this exact purpose. 
//    It stores a mapping and allows any type of keys.

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

//  - new Map()             -   Creates map.
//  - map.set(key, value)   -   Stores the value by the key.
//  - map.get(key)          -   Returns the value by the key, "undefined" if key doesn't exist in the map.
//  - map.has(key)          -   Returns --true-- if the key exists, false otherwise.
//  - map.delete(key)       -   Removes the value by the key.
//  - map.clear()           -   Removes everything from the map.
//  - map.size              -   Returns the current element count.



//  - If you do have a plain object that you need to treat as a map for some reason, it is useful to know 
//    that --Object.keys-- returns only an object’s own keys, not those in the prototype. 
//  - As an alternative to the --in-- operator, you can use the --hasOwnProperty-- method, which ignores the object’s prototype.

console.log({x: 1}.hasOwnProperty("x")); 
// → true
console.log({x: 1}.hasOwnProperty("toString"));     // Ignores the prototype property "toString"
// → false