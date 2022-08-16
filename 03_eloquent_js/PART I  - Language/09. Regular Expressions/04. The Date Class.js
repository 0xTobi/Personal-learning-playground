v//  - JavaScript has a standard class for representing dates—or, rather, points in time. It is called Date. 
//    If you simply create a date object using new, you get the current date and time.

console.log(new Date());

//  You can create an object for a specific time.
console.log(new Date(2000, 07, 25, 15, 30, 25, 723))
//  - JavaScript uses a convention where month numbers start at zero (so December is 11), yet day numbers start at one. 
//  - Timestamps are stored as the number of milliseconds since the start of 1970, in the UTC time zone. 
//  - This follows a convention set by “Unix time,” which was invented around that time. 
//  - You can use negative numbers for times before 1970. 
//  - The --getTime-- method on a date object returns this number.

console.log(new Date(2013, 11, 19).getTime());
console.log(new Date(1387407600000));
//  - If you give the Date constructor a single argument, that argument is treated as such a millisecond count. 
//  - You can get the current millisecond count by creating a new Date object and calling getTime on it or by calling the Date.now function.
//  - Date objects provide methods such as getFullYear, getMonth, getDate, getHours, getMinutes, and getSeconds to extract their components. 
//    Besides getFullYear there’s also getYear, which gives you the year minus 1900 (98 or 119) and is mostly useless.

//  - Putting parentheses around the parts of the expressions that we are interested in, we can now create a date object from a string.
function getDate(string) {
    let [_, month, day, year] = 
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day)
}
console.log(getDate("11-24-2020"))
//  - The _ (underscore) binding is ignored and used only to skip the full match element in the array returned by exec.

//  EXPLANATION 
let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
//  Where:
console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec("1-30-2003"))
//->    (4) ["1-30-2003", "1", "30", "2003", index: 0, input: "1-30-2003", groups: undefined]

//      [_, month, day, year] 
//      _       = "1-30-2003"
//      month   = "1"
//      day     = "30"
//      year    = "2003"



//  WORD AND STRING BOUNDARIES.
//  - Unfortunately, getDate will also happily extract the nonsensical date 00-1-3000 from the string "100-1-30000". 
//    A match may happen anywhere in the string, so in this case, it’ll just start at the second character and end at the second-to-last character.
//  - If we want to enforce that the match must span the whole string, we can add the markers ^ and $. 
//  - The caret matches the start of the input string, whereas the dollar sign matches the end. 
//  - So, /^\d+$/ matches a string consisting entirely of one or more digits

console.log(/^\d+$/.test("1212332"))        // Matches a string that consistrs entirely of digits.
console.log(/^\d+/.test("1212332aasasnd$")) // Only Matches a string that starts with a digit. Doesn't care what it ends with.
console.log(/\d+$/.test("1212332aasasnd$")) // Only Matches a string that ends with a digit. Doesn't care what it starts with.
console.log(/^!/.test("!jkshdksd21"))       // Only Matches a string that starts with an exclamation mark.
console.log(/x^/.test("abcdef123"))         // does not match any string (there cannot be an x before the start of the string).


//  - If, on the other hand, we just want to make sure the date starts and ends on a word boundary, we can use the marker \b. 
//  - A word boundary can be the start or end of the string or any point in the string that has a word character (as in \w) 
//    on one side and a nonword character on the other.    

console.log(/cat/.test("concatenate"));     // True
console.log(/\bcat\b/.test("concatenate")); // False


