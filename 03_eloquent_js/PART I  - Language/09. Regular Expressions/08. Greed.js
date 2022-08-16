//  - It is possible to use replace to write a function that removes all comments from a piece of JavaScript code. Here is a first attempt:
function stripComments(code) { 
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
//  You have to put a backslash before a forward slash, if you want it to be included in the pattern.
//  You also have to put backslash before any special character, if you want it to be included in the pattern.
//  [^] denotes any character EXCEPT an empty string.
console.log(stripComments("1 + /* 2 */3"));
console.log(stripComments("x = 10;// ten!"));
console.log(stripComments("1 /* a */+/* b */ 1"));
//  - The part before the or operator matches two slash characters followed by any number of non-newline characters. 
//  - The part for multiline comments is more involved. We use [^] (any character that is not in the empty set of characters) as a way 
//    to match any character. We cannot just use a period here because block comments can continue on a new line, and the period
//    character does not match newline characters.
//  - WHY DID THE OUTPUT FOR THE LAST LINE GO WRONG?
//  - The [^]* part of the expression casused the output to be wrong. 
//  - Repetition operators (+, *, ?, and {}) are GREEDY, meaning they match as much as they can and backtrack from there.
//  - If you put a question mark after them (+?, *?, ??, {}?), they become nongreedy and start by matching as little as possible, 
//    matching more only when the remaining pattern does not fit the smaller match.

//  SO LETS CORRECT THE MISTAKE BY ADDING A "?" AFTER THE [^]*?
function stripComments(code) { 
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 /* a */+/* b */ 1"));


//  - A lot of bugs in regular expression programs can be traced to unintentionally using a greedy operator where a nongreedy one 
//   would work better. When using a repetition operator, consider the nongreedy variant first.



//  EXPRESSION EXPLAINED.
(/\/\/.*|\/\*[^]*\*\//g, "");
//->  \/\/.*            "//"        For single line comments. There must be a backslash before a forward slash(any special chracter), if it is to be included in the pattern.
//                                  ".*" signifies any series of characters except a newline character. Also matches when there's no character after "//"                          
//->  \/\*[^]*?\*\/     "/* */"     For multiline comments. "[^]*" matches any series of characters that are not in the empty set of characters. That way the newline character is included.
//->  g                             Makes the expression match more than once if found.
//->  ""                            Replaces the comment with an empty string