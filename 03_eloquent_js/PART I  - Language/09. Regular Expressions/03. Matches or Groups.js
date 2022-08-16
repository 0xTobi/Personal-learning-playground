//  - The test method is the absolute simplest way to match a regular expression. 
//  - It tells you only whether it matched and nothing else. 
//  - Regular expressions also have an exec (execute) method that will return null if no match was found and return an object 
//    with information about the match otherwise.


let match = /\d+/.exec("one two 100");
console.log(match); 
console.log(match.index); 
console.log(match.input); 


//  PERSONAL EXPERIMENT
let match = /\d+/.exec("one two 100");     // "100", index: 8      /\d+/    :    Once it stumbles across a digit character it matches, and returs the position of that character. And because of the "+" it spans over other digits from that position.
let match = /\d/.exec("one two 100");      // "1", index: 8        /\d/     :    Same thing with the first one. Only that it doesn't span over the other digits, because theres no plus(+) sign.
let match = /'\d+'/.exec("'one two 100'"); // null                 /'\d+'/  :    This one check the string passed to it, to see if it is made up of only digits. But, it isn't so it doesn't match. Therefore a null value is returned.
let match = /'\d+'/.exec("'100'");         // "'100'", index: 0    /'\d+'/  :    This one matches because only a series of digits is passed to the string.
let match = /'\d'/.exec("'100'");          // null                 /'\d'/   :    This expression will match only if one digit and nothing else is passed to the string.
let match = /'\d'/.exec("'1'");            // "'1'", index: 0      /'\d'/   :    MATCHED!





//  - String values have a match method that behaves similarly. 
console.log("one two 100".match(/\d+/));

//  - When the regular expression contains subexpressions grouped with parentheses, the text that matched those groups will also 
//    show up in the array. The whole match is always the first element. 
//  - The next element is the part matched by the first group (the one whose opening parenthesis comes first in the expression), 
//    then the second group, and so on.
let quotedText = /'([^']*)'/; 
console.log(quotedText.exec("she said 'hello'")); 

//  - When a group does not end up being matched at all (for example, when followed by a question mark), its position in the output 
//    array will hold undefined. Similarly, when a group is matched multiple times, only the last match ends up in the array.
console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));
