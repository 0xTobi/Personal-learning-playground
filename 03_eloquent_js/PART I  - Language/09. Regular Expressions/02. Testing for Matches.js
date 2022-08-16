//  - Regular expression objects have a number of methods. The simplest one is test. 
//  - If you pass it a string, it will return a Boolean telling you whether the string contains a match of the pattern in the expression.

console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));
//  - A regular expression consisting of only nonspecial characters simply represents that sequence of characters. 
//  - If abc occurs anywhere in the string we are testing against (not just at the start), test will return true.


//  SETS OF CHARACTERS -----------------------------------------------------------------------------------------
//  Finding out whether a string contains abc could just as well be done with a call to indexOf. 
//  Regular expressions allow us to express more complicated patterns.
//  - Say we want to match any number. In a regular expression, putting a set of characters between square brackets 
//    makes that part of the expression match any of the characters between the brackets.
//  - Both of the following expressions match all strings that contain a digit: 

console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

//  - Within square brackets, a hyphen (-) between two characters can be used to indicate a range of characters, 
//    where the ordering is determined by the character’s Unicode number. 


//  - A number of common character groups have their own built-in shortcuts. 
//  - Digits are one of them: \d means the same thing as [0-9].
//  \d Any digit character
//  \w An alphanumeric character (“word character”) 
//  \s Any whitespace character (space, tab, newline, and similar) 
//  \D A character that is not a digit 
//  \W A nonalphanumeric character 
//  \S A nonwhitespace character
//  . Any character except for newline

//  Matching a Date and Time format.
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/; 
console.log(dateTime.test("01-30-2003 15:20")); 
console.log(dateTime.test("30-jan-2003 15:20"));

//  - These backslash codes can also be used inside square brackets. 
//  - For example, [\d.] means any digit or a period character. But the period itself, between square brackets, 
//    loses its special meaning. The same goes for other special characters, such as +.

//  - To invert a set of characters—that is, to express that you want to match any character except the ones in 
//    the set—you can write a caret (^) character after the opening square bracket.
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));  // False
console.log(notBinary.test("1100100010200110"));  // True
//  When you test /[^01]/ with 0's and 1's, it doesn't match. But when something other than 0's and 1's is tested with it, it matches.



//  REPEATING PARTS OF A PTTERN
//  - What if we want to match a whole number—a sequence of one or more digits? 
//  - When you put a plus sign (+) after something in a regular expression, it indicates that the element may be 
//    repeated more than once. Thus, /\d+/ matches one or more digit characters.

console.log(/'\d+'/.test("'123'")); // → true
console.log(/'\d+'/.test("''"));    // → false 
console.log(/'\d*'/.test("'123'")); // → true
console.log(/'\d*'/.test("''"));    // → true
//  - The star (*) has a similar meaning but also allows the pattern to match zero times. 
//  - Something with a star after it never prevents a pattern from matching, it’ll just match zero instances 
//    if it can’t find any suitable text to match.

//  PERSONAL EXPERIMMENT
console.log(/'\d+'/.test("'123a'"));        // false    :   All characters passed to the test has to be a digit for it to match.
console.log(/\d+/.test("123a"));            // true     :   Once it finds a digit character, it matches.
console.log(/\d/.test("1233222ass"))        // true
console.log(/\d/.test("'13224'"))           // true
console.log(/\d/.test("'1'"))               // true
console.log(/'\d'/.test("'1233222ass'"))    // false    :   Matches when only ONE digit character is passed to the test.
console.log(/'\d'/.test("'13224'"))         // false
console.log(/'\d'/.test("'1'"))             // true



//  A question mark makes a part of a pattern optional, meaning it may occur zero times or one time. 
//  In the following example, the u character is allowed to occur, but the pattern also matches when it is missing.
let neighbor = /neighbou?r/; 
console.log(neighbor.test("neighbour")); // → true
console.log(neighbor.test("neighbor"));  // → true


//  To indicate that a pattern should occur a precise number of times, use braces. 
//  Putting {4} after an element, for example, requires it to occur exactly four times. 
//  It is also possible to specify a range this way: {2,4} means the element must occur at least twice and at most four times. 
//  Here is another version of the date and time pattern that allows both single- and double-digit days, months, and hours. 
//  It is also slightly easier to decipher.

//  You can also specify open-ended ranges when using braces by omitting the number after the comma. So, {5,} means five or more times.
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/; 
console.log(dateTime.test("1-30-2003 8:45"));   // → true



//  GROUPING SUBEXPRESSIONS
//  - To use an operator like * or + on more than one element at a time, you have to use parentheses. 
//  - A part of a regular expression that is enclosed in parentheses counts as a single element as far as the 
//    operators following it are concerned.

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
//  - The first and second + characters apply only to the second o in boo and hoo, respectively. 
//  - The third + applies to the whole group (hoo+), matching one or more sequences like that. 
//  - The i at the end of the expression in the example makes this regular expression case insensitive,

