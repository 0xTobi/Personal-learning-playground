//  - CommonJS notation is slightly awkward.
//    Why's this?
//    - The things you add to exports are not available in the local scope, for example. 
//    - And because require is a normal function call taking any kind of argument, not just a string literal, 
//      it can be hard to determine the dependencies of a module without running its code.

//  - This is why the JavaScript standard from 2015 introduces its own, different module system. 
//  - It is usually called ES modules, "ECMASscript MODULES.""
//  - Instead of calling a function to access a dependency, you use a special import keyword.

import ordinal from "ordinal"; 
import {days, months} from "date-names";
export function formatDate(date, format) { /* ... */ }

//  - Similarly, the --export-- keyword is used to export things. 
//  - It may appear in front of a function, class, or binding definition (let, const, or var).

//  - An ES module’s interface is not a single value but a set of named bindings. 
//  - The preceding module binds formatDate to a function. 
//  - When you import from another module, you import the binding, not the value, which means an exporting module may 
//    change the value of the binding at any time, and the modules that import it will see its new value.

//  - When there is a binding named --default--, it is treated as the module’s main exported value. 
//  - If you import a module like ordinal in the example, without braces around the binding name, you get its default 
//    binding. 
//  - Such modules can still export other bindings under different names alongside their default export.

//  - To create a default export, you write --export default-- before an expression, a function declaration, or a class declaration.

export default ["Winter", "Spring", "Summer", "Autumn"];

//  - It is possible to rename imported bindings using the word --as--.

import {days as dayNames} from "date-names"; 
console.log(dayNames.length);
// → 7

//  - Another important difference is that ES module imports happen before a module’s script starts running. 
//  - That means import declarations may not appear inside functions or blocks, and the names of dependencies must be
//    quoted strings, not arbitrary expressions.

