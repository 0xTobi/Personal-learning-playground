//                                                   POLYMORPHISM


//  - When a piece of code is written to work with objects that have a certain interface—in this case, 
//    a "toString" method, any kind of object that happens to support this interface 
//    can be plugged into the code, and it will just work.
//  - This technique is called POLYMORPHISM. Polymorphic code can work with values of different shapes, 
//    as long as they support the interface it expects.

function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(line) {
    return `The ${this.type} rabbit says '${line}'`
}
let blackRabbit = new Rabbit("black")
console.log(blackRabbit.speak("I'll kill you"));

Rabbit.prototype.toString = function() { 
    return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit)); 
// → a black rabbit


//  - Calling Function.toString on a string won't produce a desired output, so
=//    Function value, which practically returns a string.

 