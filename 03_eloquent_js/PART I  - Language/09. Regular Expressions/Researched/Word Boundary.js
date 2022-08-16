//  /b  -   Word boundary           |   Word followed by Nonword, vise versa.
//  /B  -   Non word boundary       |   Nonword followed by Nonword, or Word followed by Word.

// word = [\w] = [A-Z, a-z, 0-9]
// nonword = [^\w]

// -   Any transition from word to non word character is regarded as a word boundary.
// -   If the first character in a string is a word character, then there's a word boundary between that character and the start of that string.
// -   If the last character in a string is a word character, then there's a word boundary between that character and the end of that string.


// "a2bhc,sas&"    -   There's a word boundary at the start of the string, but not at the end of the string. 
                // -   between "c" and "," there's a word boundary. Also between "s" and "$" there's a word boundary.

// "javascript regex"  -   Word boundary at the beginning and at the end of the string.
//                     -   Word boundary between "t" and " ". 
//                     -   Word boundary between " " and "r".
//                     -   Others are Nonword boundary.

Word boundary and Nonword boundary only matches POSITION, not any character. There's a zero character match.


"dsk\nsjkjsdksjdskj\n".match(/\B.\b/)
->      ["k", index: 2, input: "dsk↵sjkjsdksjdskj↵", groups: undefined]
//      "s" - "k" is a nonword boundary.
//      "k" is a character that is not a newline.
//      "k" - "\" is a word boundary.


