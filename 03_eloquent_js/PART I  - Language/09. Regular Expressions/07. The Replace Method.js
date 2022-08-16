//  - String values have a replace method that can be used to replace part of the string with another string.
console.log("papa".replace("p", "m"));

//  - The first argument can also be a regular expression, in which case the first match of the regular expression is replaced. 
//  - When a g option (for global) is added to the regular expression, all matches in the string will be replaced, not just the first.
console.log("Borobudur".replace(/[ou]/, "a")); 
console.log("Borobudur".replace(/[ou]/g, "a"));

//  - The real power of using regular expressions with replace comes from the fact that we can refer to matched groups in the replacement string.
//  - say we have a big string containing the names of people, one name per line, in the format Lastname, Firstname. 
//    If we want to swap these names and remove the comma to get a Firstname Lastname format
console.log("Akinsola, Olumide \nAderibigbe, Tobi \nUrum, Uche".replace(/(\w+), (\w+)/g, '$2 $1'))
//  - The $1 and $2 in the replacement string refer to the parenthesized groups in the pattern.

//  - It is possible to pass a function—rather than a string—as the second argument to replace. 
//  - For each replacement, the function will be called with the matched groups (as well as the whole match) as arguments, and 
//    its return value will be inserted into the new string.
//  - AN EXAMPLE
let s = "the cia and fbi"; 
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

//  A MORE INTERESTING EXAMPLE
let stock = "1 lemon, 2 cabbages, and 101 eggs"; 
function minusOne(match, amount, unit) { 
    amount = Number(amount) - 1; 
    if (amount == 1) { // only one left, remove the 's' 
    unit = unit.slice(0, unit.length - 1);
    } 
    else if (amount == 0) { 
        amount = "no";
    } 
    return amount + " " + unit; 
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
//  - This takes a string, finds all occurrences of a number followed by an alphanumeric word, and returns a string wherein 
//    every such occurrence is decremented by one. 
//  - The (\d+) group ends up as the amount argument to the function, and the (\w+) group gets bound to unit. 
//  - The function converts amount to a number—which always works since it matched \d+, and makes some adjustments in case there is only one or zero left.