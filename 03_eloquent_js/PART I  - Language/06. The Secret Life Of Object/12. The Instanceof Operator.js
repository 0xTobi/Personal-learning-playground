//  Javascript provides a binary operator called "instanceof".
//  It is used to know whether an object was derived from a specific class.

console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
console.log(new SymmetricMatrix(2) instanceof Matrix);
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
console.log([1] instanceof Array);