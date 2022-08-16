//                                                   Methods

let rabbit = {};
rabbit.speak = function(line) {     // Creates a function in an object. I.e. A method
    console.log(`The rabbit says, '${line}'.`);
}

rabbit.speak("I'm alive");      // Calls the method.
console.log(rabbit)

rabbit.speak()



function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`)
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("It's getting late!");
//--> The white rabbit says 'it's getting late!'
hungryRabbit.speak("I could use a carrot right now");
//--> The hungry rabbit says 'I could use a carrot right now'
/*
    Explanation
    - whiteRabbit & hungry rabbit are objects that has a type property and also a "speak" property which is a function.
    - When the speak function is called as a method, the "this" binding points at the object it was called on.
*/



speak("I'm hungry")
//--> The undefined rabbit says 'I'm hungry'
speak.call(whiteRabbit, "I'm hungry")
//--> The white rabbit says 'I'm hungry'
/*
    Explanation 
    - The "this" can be considered an extra parameter that is passed in a different way.
    - The function "call" method can be used to pass it explicitly.
    - It takes the "this" value as it's first argument and treats further arguments as normal parameters.
    - That is when the "speak" function encounters any "this" binding name in its body, it returns the "whiteRabbit".
*/


function normalize() {
    console.log(this.coords.map(n => n / this.length));
}

normalize.call({coords: [0, 2, 3], length: 5});
//--> [0, 0.4, 0.6]
/*
    Explanation
    - Each function has its own THIS binding, whose value depends on the way it is called. So:
    - You cannot refer to the "this" of the wrapping scope in a regular function defined with a function keyword,
    - But you can use the arrow function, since they do not bind their own THIS but can see the THIS binding of the scope around them.
    - If we had written the argument to map using the function keyword, the code wouldn't work.
    - console.log(this.coords.map(function(n) {
        return n / this.length
    }))
*/
