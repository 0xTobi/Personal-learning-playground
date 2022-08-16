
//      LEXICAL SCOPING
function init() {
  var name = "Mozilla";     // name is a local value created by init.
  function displayName() {  // displayName is the inner function, a closure.
    console.log(name);      // Use variable declared in the parent function. && Since inner functions has access to variables of outer functions, displayName() can access the variable name declared in the parent finction init()
  }
  displayName();
}
init();



//                                                CLOSURE
//    ----------------------------------------------1---------------------------------------------------
function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;     // Notice that displayName is returned from the outer function before being executed.
}

var myFunc = makeFunc();    // makeFunc() is invoked the first time and stored in variable muFunc.
myFunc();                   // myFunc is executed, that is the inner function (displayName).



//    -----------------------------------------------2--------------------------------------------------
function makeAdder(x) {     // makeAdder is a function factory. It creates functions that can add specific values to their arguments.
  return function(y) {
    return x + y;
  }
}

var add5 = makeAdder(5);    // closure
var add10 = makeAdder(10);  // closure

console.log(add5(7));      // Created by the function factory, it adds 5 to it's given argument.
console.log(add10(7));      // Created by the function factory, it adds 10 to it's given argument.





let val1 = makeAdder(5)
val1(6)