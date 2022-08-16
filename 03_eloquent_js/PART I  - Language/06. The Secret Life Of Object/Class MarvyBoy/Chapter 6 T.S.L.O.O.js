console.log(">>> THE SECERET LIFE OF OBJECTS.")
// object-oriented programming has shaped the design of many programming languages, including JavaScript...

console.log(">>> ENCAPSULATION.")
// The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state...
// This way, some knowledge about the way a piece of the program works can be kept local to that piece...
// Different pieces of such a program interact with each other through """interfaces""", hiding their precise implementation....
// Properties that are part of the interface are called "public". The others, in which outside code should not be touching, are called private.
// It is also common to put an underscore character (_) at the beginning of property names to indicate that those properties are private -
// - Separating interface from implementation is a great idea. It is usually called ==> encapsulation <== ....


console.log(">>> METHODS.")
// Methods are nothing more than "properties" that hold function values. This is a simple method:
let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");

// Usually a method needs to do something with the object it was called on...
// When a function is called as a method—as in object.method()—the binding called """this""" in its body automatically points at the object that it was
// called on....

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};
whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
hungryRabbit.speak("i would love to eat cupcakes!!!");
// You can think of this as an extra parameter that is passed in a different way....

// If you want to pass it explicitly, you can use a function’s call method, it takes the this value as its first argument and treats further arguments
// as normal parameters....
speak.call(hungryRabbit, "Burp!");
// speak.call(micheal, "Burp!"); ==> Reference Error: micheal is not defined.

// you cannot refer to the "this" of the wrapping scope in a regular function, Arrow functions are different—they do not bind their own this but can
// see the this binding of the scope around them, If I had written the argument to map function using the function keyword, the code wouldn’t work....

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
console.log("")

console.log(">>> PROTOTYPES.")
let empty = {};
console.log(empty.toString);
console.log(empty.toString());
console.log("")
// I pulled a property out of an empty object. Magic!
// In addition to the set of properties of an object, most of them have a """prototype""".....
// A prototype is another object that is used as a fallback source of properties, so if an object doesn't have a property, its prot... would be searched,
// then the p..'s p.. and so on....

// The great ancestral prototype === Object.prototype
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype)); // does not have its own prototype...
// The root of Object prototype is Object.prototype
console.log("")

// Functions derive from """Function.prototype""", and arrays derive from """Array.prototype"""....
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);
console.log(Object.getPrototypeOf(Array.prototype)); // ion know what this is!!!

// You can use Object.create to create an object with a specific prototype....
let protoRabbit = {
    speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit); 
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
console.log("")

console.log(">>> CLASSES.")
// JavaScript’s prototype system can be interpreted as a somewhat informal take on an object-oriented concept called classes...
// A class defines the shape of a type of object—what methods and properties it has. Such an object is called an "instance" of the class....
// Prototypes are useful for defining properties for which all instances of a class share the same value, such as methods, properties that differ are
// better stored directly in the OBJECT.....
// ...... A constructor function ...... ===> creates an instance of a given class.
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}
// Defining this type of function easily ===>
// The prototype object used when constructing objects is found by taking the prototype property of the constructor function.
// Placing "new" infront of a function call treats the function as a "constructor".....
function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};
let weirdRabbit = new Rabbit("weird");
console.log(weirdRabbit.speak("Guten morgan"))

// Constructors (all functions, in fact) automatically get a property named prototype, which by default holds a plain, empty object that derives from
// Object.prototype, you can override the object if you want, or add to the existing one.....
// It’s important to understand the distinction between the way a prototype is associated with a constructor (through its prototype property) and the way
// objects have a prototype......
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype + "\n");

console.log(">>> CLASS NOTATION.")
// So JavaScript classes are constructor functions with a prototype property. That is how they work, and until 2015, we have a less awkward notation.....
class Actor {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`This ${this.type} actor says '${line}'`);
    }
}
let killerActor = new Actor("killer");
let blackActor = new Actor("Black");
console.log(killerActor.speak("action"))

// The class keyword allows us to write a constructor and sets of methods all in one place.....
// Class declarations currently allow only methods to be added to the prototype, which can be inconvinient when you want to save a non funnction value...
// Like function, class can be used both in statements and in expressions, When used as an expression, it doesn’t define a binding but just produces
// the constructor as a value. You are allowed to omit the class name in a class expression.......
let object = new class { getWord() { return "hello"; } };
console.log(object.getWord() + "\n");

console.log(">>> OVERRIDING DERIVED PROPERTIES.")
// When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself..... 
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth); // undefined
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
console.log(Rabbit.prototype.teeth); // small

// Overriding is also used to give the standard function and array prototypes a different toString method than the basic object prototype.....
console.log(Array.prototype.toString == Object.prototype.toString);

// Calling toString on an array gives a result similar to calling .join(",") on it—it puts commas between the values in the array......
// Directly calling Object.prototype.toString with an array produces a different string. That function doesn’t know about arrays, so it simply puts
// the word object and the name of the type between square brackets.......
console.log([1, 2].toString());
console.log([1, 2].join());
console.log([1, 2].join(" + "));
console.log(Object.prototype.toString.call([1, 2]));
console.log("")

console.log(">>> MAPS.")
// Used also for a different-rather confusing thing.
// A map (noun) is a data structure that associates values (the keys) with other values.....
// For example, you might want to map names to ages....
let age = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
};
console.log(age["Júlia"])
console.log(`Júlia is ${age["Júlia"]}`);
console.log("Is Jack's age known?", "Jack" in age);
console.log("Is toString's age known?", "toString" in age, "<== This should be false...\n");
// As such, using plain objects as maps is dangerous....
// First, it is possible to create objects with no prototype. If you pass null to Object.create, the resulting object will not derive from
// Object.prototype and can safely be used as a map....
console.log("tostring" in Object.create(null), "\n");

// Object property names must be strings. Needing a map whose keys can't be converted to strings, u can't use objects as your map, FORTUNATELY JS
// comes with a class called Map that is written for this exact purpose, stores map and allow any type of key......
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
console.log(`Júlia is ${ages.get("Júlia")}`);
console.log("Is Jack's age known?", ages.has("Jack"));
console.log(ages.has("toString"), "<== Now it's false");

// If you do have a plain object that you need to treat as a map for some reason, it is useful to know that Object.keys returns only an object’s own keys,
// not those in the prototype......
// As an alternative to the in operator, you can use the hasOwnProperty method, which ignores the object’s prototype....
console.log({x: 1}.hasOwnProperty("x"));
console.log({x: 1}.hasOwnProperty("toString") + "\n");

console.log(">>> POLYMORPHISM.")
// You can also do that-define your own version of toString, to make a more meaningfull information-yourself.......
Rabbit.prototype.toString = function() {
    return `A ${this.type} rabbit`;
};
console.log(String(weirdRabbit) + "\n");
// This is a simple instance of a powerful idea....
// When a piece of code is written to work with objects that have a certain interface—in this case, a toString method—any kind of object that happens to
// support this interface can be plugged into the code, and it will just work.. ------ THIS IS CALLED POLYMORPHISM ------

// Polymorphic code can work with values of different shapes, as long as they support the interface it expects......

console.log(">>> SYMBOLS.")
// It is possible for multiple interfaces to use the same property name for different things....
// When I claimed that property names are strings, that wasn’t entirely accurate. They usually are, but they can also be symbols......
// Question, so wht are symbols? --- Symbols are values created with the Symbol function. 
// Unlike strings, newly created symbols are unique—you cannot create the same symbol twice...
let sym = Symbol("name");
console.log(sym == Symbol("name")); // Take note!!!.
Rabbit.prototype[sym] = 55;
console.log(weirdRabbit[sym] + "\n");
// --> console.log(weirdRabbit[sym]()); --> TypeError: weirdRabbit[sym] is not a funtion

// The string you pass to Symbol is included when you convert it to a string and can make it easier to recognize a symbol. eg in a console.....
// Being both unique and usable as property names makes symbols suitable for defining interfaces that can peacefully live alongside other properties,
// No matter what their names are. And also multiple sysmbols can have the same name...

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]() + "\n");

// It is possible to include symbol properties in object expressions and classes by using square brackets around the property name......
let stringObject = {
    [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]() + "\n");
    
console.log(">>> THE ITERATOR INTERFACE.")
// The object given to a for/of loop is expected to be iterable.....
// This means it has a method named with the Symbol.iterator symbol (a symbol value defined by the language, stored as a property of the Symbol function).....
// Note that the next, value, and done property names are plain strings, not symbols.... We can directly use this interface ourselves.
let okIterator = "OK!"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());
console.log("")

// Let’s implement an iterable data structure. We’ll build a matrix class, acting as a two-dimensional array.....
class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    get(x, y) {
        return this.content[y * this.width + x];
    } // retrieves value
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    } // updates value
}

// The class stores its content in a single array of width × height elements......
// The elements are stored row by row, so for example the 3rd element in the 5th row is stored at position 4 * width + 2......
// The constructor function takes a width, a height, and an optional content function that will be used to fill in the initial values......
// There are get and set methods to retrieve and update elements in the matrix.......
// When looping over a matrix, you are usually interested in the position of the elements as well as the elements themselves, so we’ll 
// have our iterator produce objects with x, y, and value properties.......
class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return {done: true};

        let value = {x: this.x,
                    y: this.y,
                    value: this.matrix.get(this.x, this.y)};
    this.x++;

    if (this.x == this.matrix.width) {
        this.x = 0;
        this.y++;
    }
    return {value, done: false};
    }
}
// The class tracks the progress of iterating over a matrix in its x and y properties.....
// The next method starts by checking whether the bottom of the matrix has been reached......
// If it hasn’t, it first creates the object holding the current value and then updates its position, moving to the next row if necessary......

// NOTE:: Throughout this book, I’ll occasionally use after-the-fact prototype manipulation to add methods to classes so that the individual pieces of
// code remain small and self-contained. In a regular program, where there is no need to split the code into small pieces, you’d declare these methods 
// directly in the class instead.......

// Let’s set up the Matrix class to be iterable......
Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};

// We can now loop over a matrix with for/of.......
let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
    console.log(x, y, value);
}
console.log("");

console.log(">>> GETTERS, SETTERS, AND STATICS.");
// Interfaces often consist mostly of methods, but it is also okay to include properties that hold non-function values......
// For example, Map objects have a size property that tells you how many keys are stored in them......
// It is not even necessary for such an object to compute and store such a property directly in the instance...... 
// Even properties that are accessed directly may hide a method call. Such methods are called getters, and they are defined by writing get in front of
// the method name in an object expression or class declaration......
let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};
console.log(varyingSize.size);
console.log("Your random number is " + varyingSize.size + "\n");

// Whenever someone reads from this object’s size property, the associated method is called. You can do a similar thing when a property is written to,
// using a setter......
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log(temp.celsius + "\n");

// The Temperature class allows you to read and write the temperature in either degrees Celsius or degrees Fahrenheit, but internally it stores only
// Celsius and automatically converts to and from Celsius in the fahrenheit getter and setter.......

// Sometimes you want to attach some properties directly to your constructor function, rather than to the prototype. Such methods won’t have
// access to a class instance but can, for example, be used to provide additional ways to create instances.console......
// Inside a class declaration, methods that have static written before their name are stored on the constructor. So the Temperature class allows you to
// write Temperature.fromFahrenheit(100) to create a temperature using degrees Fahrenheit.....

console.log(">>> INHERITANCE.")
// Some matrices are known to be symmetric......
// JavaScript’s prototype system makes it possible to create a new class, much like the old class, but with new definitions for some of its properties....
// In object-oriented programming terms, this is called inheritance. The new class inherits properties and behavior from the old class.......
class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }

    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}
let matrixX = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrixX.get(2, 3));

// The use of the word extends indicates that this class shouldn’t be directly based on the default Object prototype but on some other class.
// This is called the superclass. The derived class is the subclass.....
// When inheriting from a class, you usually have to know more about how it works than when simply using it........
// Inheritance can be a useful tool, and I use it now and then in my own programs, but it shouldn’t be the first tool you reach for, and you probably
// shouldn’t actively go looking for opportunities to construct class hierarchies (family trees of classes).....


console.log(">>> THE INSTANCEOF OPERATOR.")
// It is occasionally useful to know whether an object was derived from a specific class.....
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
console.log(new SymmetricMatrix(2) instanceof Matrix);
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
console.log([1] instanceof Array);

// The operator will see through inherited types, so a SymmetricMatrix is an instance of Matrix. The operator can also be applied to standard constructors
// like Array. Almost every object is an instance of Object.......