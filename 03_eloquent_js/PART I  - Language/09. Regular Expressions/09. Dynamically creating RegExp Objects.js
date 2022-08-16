//  - There are cases where you might not know the exact pattern you need to match against when you are writing your code. 
//  - Say you want to look for the user’s name in a piece of text and enclose it in underscore characters to make it stand out. 
//  - Since you will know the name only once the program is actually running, you can’t use the slash-based notation.
//    But you can build up a string and use the RegExp constructor on that.

let name = "harry"; 
let text = "Harry is a suspicious character."; 
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
//  - When creating the \b boundary markers, we have to use two backslashes because we are writing them in a normal string, 
//    not a slash-enclosed regular expression. The second argument to the RegExp constructor contains the options for the regular 
//    expression—in this case, "gi" for global and case insensitive.

//  - PERSONAL EXPERIMENT--------------------------
//  - If we remove "g" feom the regular experession options, and include another "Harry" in the "text" string. That one won't be replaced.
let name2 = "harry"; 
let text2 = "Harry is a suspicious character. Harry is a Fraud!"; 
let regexp2 = new RegExp("\\b(" + name2 + ")\\b", "i");
console.log(text2.replace(regexp2, "_$1_"));

//  - But what if the name is "dea+hl[]rd" because our user is a nerdy teenager? That would result in a nonsensical regular expression 
//    that won’t actually match the user’s name. To work around this, we can add backslashes before any character that has a special meaning.
let name = "dea+hl[]rd"; 
let text = "This dea+hl[]rd guy is super annoying."; 
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&"); 
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_"));




//  THE SEARCH METHOD
//  