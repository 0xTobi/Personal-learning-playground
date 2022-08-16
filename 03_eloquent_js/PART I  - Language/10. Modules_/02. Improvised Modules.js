//  You can use JavaScript functions to create local scopes and objects to represent module interfaces. 

//  - This is a module for going between day names and numbers (as returned by Date’s getDay method). 
//  - Its interface consists of "weekDay.name" and "weekDay.number", and it hides its local binding names inside the scope of a 
//    function expression that is immediately invoked.

const weekDay = function() { 
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return {
        name(number) { return names[number]; }, 
        number(name) { return names.indexOf(name); }
    }; 
}();
console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday

// ------------------------------------------------------------------------------------------------------------------------------------------
//  EXPLANATION
//  - Weekday is a function that is immediately invoked, by adding "()" after it. And it returns an object.
//  - Going back to Closure from chapter 4. The value of the name binding is stored as a closure in the inner object.
//    So immediately the outer function (weekDay) finish running, the binding "names" cease to exist in that function, but is stored
//    as a closure inside the return object.
//  - So weekDay basically means the inner object. 
//    Note!! We don't have to execute the weekDay function by adding "()" after it, 
//    since it has already been added in the function ecpression.
//  - weekDay.name requires a number argument, which it passes to the the "names" array and return the value found in that index.
//  - weekday.number requires a string argument, which it searches the "names" array for a match and returns the index in which it was found.

//  - weekDay.name(weekDay.number("Sunday")) 
//      - weekDay.number("Sunday") returns the index of which it finds an exact string match. Which is then passed to weekDay.name.
//      - weekDay.name(index of "Sunday") returns the string found on the on the given index position.
// -------------------------------------------------------------------------------------------------------------------------------------------





//  - This style of modules provides isolation, to a certain degree, but it does not declare dependencies. 
//  - Instead, it just puts its interface into the global scope and expects its dependencies, if any, to do the same.

//  - If we want to make dependency relations part of the code, we’ll have to take control of loading dependencies. 
//  - Doing that requires being able to --execute strings as code--. JavaScript can do this.
