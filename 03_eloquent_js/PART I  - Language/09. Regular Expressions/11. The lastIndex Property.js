//  - The exec method similarly does not provide a convenient way to start searching from a given position in the string. 
//    But it does provide an inconvenient way.
//  - Regular expression objects have properties. 
//  - One such property is source, which contains the string that expression was created from. 
//  - Another property is lastIndex, which controls, in some limited circumstances, where the next match will start. 
//  - Those circumstances are that the regular expression must have the global (g) or sticky (y) option enabled, and the match
//    must happen through the exec method.

let pattern = /y/g; 
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");

console.log(match.index);           // → 4
console.log(pattern.lastIndex);     // → 5
//  - If the match was successful, the call to exec automatically updates the lastIndex property to (point after the match.) 
//  - If no match was found, lastIndex is set back to zero, which is also the value it has in a newly constructed regular expression object. 
//  - The difference between the global and the sticky options is that, when sticky is enabled, the match will succeed only if it 
//    starts directly at lastIndex, whereas with global, it will search ahead for a position where a match can start.

let global = /abc/g; 
console.log(global.exec("xyz abc")); // → ["abc"] 
let sticky = /abc/y;
console.log(sticky.exec("xyz abc")); // → null

//  - When using a shared regular expression value for multiple exec calls, these automatic updates to the lastIndex property can 
//    cause problems. 
//  - Your regular expression might be accidentally starting at an index that was left over from a previous call.
let digit = /\d/g;
console.log(digit.exec("here it is: 1"));   // → ["1"]
console.log(digit.lastIndex)                // 13
console.log(digit.exec("and now: 1"));      // → null

//  - Another interesting effect of the global option is that it changes the way the match method on strings works. 
//  - When called with a global expression, instead of returning an array similar to that returned by exec, 
//  - match will find all matches of the pattern in the string and return an array containing the matched strings.
console.log("Banana".match(/an/g));         // → ["an", "an"]

//  SUMMARY
//  - So be cautious with global regular expressions. 
//    The cases where they are necessary—calls to replace and places where you want to explicitly use
//    lastIndex—are typically the only places where you want to use them.













//  PERSONAL EXPERIMENTS
//  - Global option
let pattern = /y/g; 
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index)     // 4

let pattern = /y/g; 
pattern.lastIndex = 2;
let match = pattern.exec("xyzzy");
console.log(match.index)     // 4

let pattern = /y/g; 
pattern.lastIndex = 1;
let match = pattern.exec("xyzzy");
console.log(match.index)     // 1

let pattern = /z/g; 
pattern.lastIndex = 2;
let match = pattern.exec("xyzzy");
console.log(match.index)     // 2

let pattern = /z/g; 
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index)     // 3


//  - Sticky Option
let pattern = /y/y; 
pattern.lastIndex = 2;
let match = pattern.exec("xyzzy"); 
console.log(match.index)    // null

let pattern = /y/y; 
pattern.lastIndex = 1;
let match = pattern.exec("xyzzy");
console.log(match.index)     // ["1"]

let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));    // null
console.log(sticky.exec("abc xyz"));    // ["abc", index: 0]



