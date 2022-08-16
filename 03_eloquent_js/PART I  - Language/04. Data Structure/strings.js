// STRINGS AND THEIR PROPERTIES

console.log("one two three".indexOf("ee"));     // A string's indexOf an take more than one character.
// → 11


console.log(" okay \n ".trim());                // The trim method removes whitespace.   
// → okay


console.log(String(6).padStart(3, "0"));        // Takes the desired length and padding character as arguments.
// → 006


let string = "The boy is a very wicked boy";
let cut = string.split(` `);            // This method splits the string on every occurance of another string.

console.log(cut);
// --> ['The', 'boy', 'is', 'a', 'very', 'wicked', 'boy']

console.log(cut.join(" "));             // This method joins the string back.
// --> The boy is a very wicked boy


let string = "LA"
console.log(string.repeat(5));          // Repeats the word string "LA" 5 times.
// LALALALALA







