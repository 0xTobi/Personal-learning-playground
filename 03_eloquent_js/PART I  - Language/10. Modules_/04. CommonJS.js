//  The most widely used approach to bolted-on JavaScript modules is called CommonJS modules. 
//  Node.js uses it and is the system used by most packages on NPM.

//  - The main concept in CommonJS modules is a function called require. 
//    When you call this with the module name of a dependency, it makes sure the module is loaded and returns its interface.
//  - Because the loader wraps the module code in a function, modules automatically get their own local scope. 
//    All they have to do is call require to access their dependencies and put their interface in the object bound to exports.

const ordinal = require("ordinal");                             // Single function that converts numbers to strings, "1st", "2nd", etc...
const {days, months} = require("date-names");                   // DESTRUCTURING, imports an object that contains properties "days" and "months". Days and Months are arrays of names.
exports.formatDate = function(date, format) {                   // Exports a single function, formatDate, which takes a date object and a template string.
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {    // YYYY - year(1992, 2005, ...)  |   M - month in digit(1, 5, 7, 8, ...) |   MMMM - Month in short words("jan", "mar", "jun", ...)    |   D - day in digit(1, 2, 4, ...)    |   Do - day in string format("1st", "4th", "10th", ...)  |   dddd - day in short word format("thu", "fri", "mon", ...)
        if (tag == "YYYY") return date.getFullYear();           // if tag == "YYYY"  return year in fullYear format.
        if (tag == "M") return date.getMonth();                 // if tag == "M" return month in digit format.
        if (tag == "MMMM") return months[date.getMonth()];      // if tag == "MMMM" return month in string format. Via passing the digit as an index to the months array.
        if (tag == "D") return date.getDate();                  // if tag == "D" return day in digit format.
        if (tag == "Do") return ordinal(date.getDate());        // if tag == "Do" return day in ordinal string format.
        if (tag == "dddd") return days[date.getDay()];          // if tag == "dddd" return day in string format. Via passing the digit as an index to the days array.
    });
};

const {formatDate} = require("./format-date");                  // "date" and "format" are the interfaces for the formatDate module, so it depends on them.
console.log(formatDate(new Date(2019, 8, 13), "dddd the Do"));  // Takes a date object and a string template, that directs the format in which the result should be outputed.
// → Friday the 13th

//  - We can now define require.

require.cache = Object.create(null); 
function require(name) { 
    if (!(name in require.cache)) {                                 // Checks if the module has been loaded before.q1   WE1 weq1    E12 
        let code = readFile(name);                                  // Reads the module
        let module = {exports: {}};                                 // All they have to do is call require to access their dependencies and put their interface in the object bound to exports.                               
        require.cache[name] = module; 
        let wrapper = Function("require, exports, module", code);   // Wraps the module's code in a function. 
        wrapper(require, module.exports, module);                   // Calls the function that houses the module's code.
    } 
    return require.cache[name].exports;
}

//  - "readFile" is a made-up function that reads a file and returns its contents as a string. 
//  - Standard JavaScript provides no such functionality—but different JavaScript environments, such as the browser and Node.js, 
//    provide their own ways of accessing files. 
//  - The example just pretends that readFile exists.

//  - To avoid loading the same module multiple times, require keeps a store (cache) of already loaded modules. 
//  - When called, it first checks if the requested module has been loaded and, if not, loads it. 
//  - This involves 
//    Reading the module’s code, 
//    Wrapping it in a function, 
//    and Calling it.

//  - The modules system will crate an empty object i   nterface for you(bound to exports). You can change that with any value by 
//    overwritting --module.exports--
//  - By defining require, exports, and module as parameters for the generated wrapper function (and passing the appropriate 
//    values when calling it), the loader makes sure that these bindings are available in the module’s scope.

//  - The way the string given to require is translated to an actual filename or web address differs in different systems. 
//    - When it starts with "./" or "../", it is generally interpreted as (relative) to the current module’s filename. 
//      So "./format-date" would be the file named format-date.js in the same directory.
//  - When the name isn’t relative, Node.js will look for an installed package by that name. 


//  - In the example code in this chapter, we’ll interpret such names as referring to NPM packages.
//  - Instead of writing our own INI file parser, we can use one from NPM.

const {parse} = require("ini"); 
console.log(parse("x = 10\ny = 20"));
// → {x: "10", y: "20"}








