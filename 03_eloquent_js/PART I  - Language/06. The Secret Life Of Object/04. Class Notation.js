//  So JavaScript classes are constructor functions with a prototype property.
//  These days, we have a less awkward notation.


//  - The class keyword starts a class declaration, which allows us to define a constructor 
//    and a set of methods all in a single place. 
//  - Any number of methods may be written inside the declaration’s braces. 
//  - The one named --constructor-- is treated specially. It provides the actual constructor function, 
//    which will be bound to the name Rabbit. 
//  - The others are packaged into that constructor’s prototype.\
//  - Class declarations currently allow only methods—properties that hold functions—to be added to the prototype.

class Rabbit {  //  STATEMENT   ||  "Rabbit is the binding name"     
    constructor(type) { 
        this.type = type;
    } 
    speak(line) { 
        console.log(`The ${this.type} rabbit says '${line}'`); 
    } 
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

console.log(killerRabbit.speak("don't kill me FGS!!"));
console.log(blackRabbit.speak("Ughh! I'm too black, I hate my life!!"))


//  - Like function, class can be used both in statements and in expressions. 
//  - STATEMENT     ||      class Rabbit = {constructor()...}
//  - EXPRESSION    ||      class {getWord() {...}} 
//  - If you don't define a constructor for a class, a default one is created.
//  - The default constructor is an empty function which doesn't modify the instance.
//  - When used as an expression, it doesn’t define a binding but just produces the constructor as a value.
//  - You are allowed to omit the class name in a class expression

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord() + "\n" + "what's up");

//  let object = new class { getWord() {return "hello"} };
//  class used as an expression, it doesn't define a constructor function. 
//  It just creates a prototype and packages the function --getWord()-- into it.
//  The --object-- is an object that derives from the created prototype.


