//  CLASSES
//  A class defines the shape of a type of object —what methods and properties it has.
//  Such an object is called an --INSTANCE-- of the class.
//  Prototypes are useful for defining properties for which all instances of a class share the same value, such as methods. 
//  Properties that differ per instance, such as our rabbits’ type property, need to be stored directly in the objects themselves.

//  To create an instance of a given class
//  You have to make an object that derives from the proper class,
//  but you also have to make sure it, itself, has the properties that instances of this class are supposed to have.
//  This is what a --CONSTRUCTOR-- function does.


let protoRabbit = {                     
    speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);  
    }
    //  The --type-- is a property requred of all instances of this class.
};

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type; 
    return rabbit;
}

//  - Well, there's a shorter way to go about this...... Ma phorr!!!
//  - JavaScript provides a way to make defining this type of function easier. 
//  - This means that an object with the right prototype is automatically created, bound to --this-- in the function,-
//    and returned at the end of the function.
//  - If you put the keyword --new-- in front of a function call, the function is treated as a --CONSTRUCTOR--.

function Rabbit(type) {     
    this.type = type;
}
//  - The prototype object used when constructing objects is found by taking the prototype property of the constructor function.
Rabbit.prototype.speak = function(line) { 
    console.log(`The ${this.type} rabbit says '${line}'`);
};
let evilRabbit = new Rabbit("evil");
console.log(evilRabbit.speak("I'll destroy you"))


//  - Constructors (all functions, in fact) automatically get a property named --prototype--
//    which by default holds a plain, empty object that derives from Object.prototype.
//  - Rabbit.prototype.speak || The empty object in the Rabbits' function prototype property is assigned a function property "speak" .
//  - Rabbit = {prototype: {speak: ...}}
//  - You can overwrite it with a new object if you want using --Object.create-- . Or you can add properties to the existing object.
//  - By convention, the names of constructors are capitalized so that they can easily be distinguished from other functions.

//  - It’s important to understand the distinction between the way a prototype is associated with a constructor (through its prototype property) 
//  - and the way objects have a prototype (which can be found with Object.getPrototypeOf).

//  - The actual prototype of a constructor is Function.prototype since constructors are functions.
//  - Its prototype property holds the prototype used for instances created through it.

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
//  → true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
//  → true