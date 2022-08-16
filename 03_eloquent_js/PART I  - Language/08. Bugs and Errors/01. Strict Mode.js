//  - JavaScript can be made a little stricter by enabling strict mode. 
//  - This is done by putting the string "use strict" at the top of a file or a function body. 

function spotMe() {
    "use strict";
    for (counter = 0; counter < 3; counter++) {
        console.log("I'm hiding from you");
    }
}
spotMe();
//  - Normally, when you forget to put "let" in front of your binding, as with counter in the example, 
//    JavaScript quietly creates a global binding and uses that. In strict mode, an error is reported instead.


function Person(name) { 
    this.name = name; 
} 
let ferdinand = Person("Ferdinand"); // oops forgot to add "new"
console.log(name);
// → Ferdinand
//   The call to Person succeeded but returned an undefined value and created the global binding name.

"use strict"
function Person(name) { 
    this.name = name; 
} 
let ferdinand = Person("Ferdinand"); // oops forgot to add "new"
console.log(name);
// → TypeError: Cannot set property 'name' of undefined


