//  - If you mirror a symmetric matrix around its top-left-to-bottom-right diagonal, it stays the same. 
//  - In other words, the value stored at x,y is always the same as that at y,x.
//  - Imagine we need a data structure like Matrix but one that enforces the fact that the matrix is and remains symmetrical.

//  - JavaScript’s prototype system makes it possible to create a NEW class, much like the OLD class, 
//    but with new definitions for some of its properties. 
//  - The prototype for the new class derives from the old prototype but adds a new definition for, say, the set method.

//  - In object-oriented programming terms, this is called INHERITANCE. 
//  - The NEW class inherits properties and behavior from the OLD class.


class SymmetricMatrix extends Matrix { 
    constructor(size, element = (x, y) => undefined) { 
        super(size, size, (x, y) => {
            if (x < y) return element(y, x); 
            else return element(x, y);          
        }); 
    }
    set(x, y, value) { 
        super.set(x, y, value); 
        if (x != y) { super.set(y, x, value);
        } 
    } 
}
let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));

//  - Matrix - superclass
//  - SymmetricMatrix - subclass
//  - "extends" indicates that this class shouldn't be directly based on the default Object prototype but on some other class.
//  - This is called the -superclass-. The derived class is the -subclass-.
//  - The "super" keyword in the constuctor body is used to call the -superclass- constructor.
//  - Inside class methods, "super" provides a way to call methods as they were defined in the -superclass-
//    The "set" method uses "super" to call a specific method from the superclass's set of methods.
