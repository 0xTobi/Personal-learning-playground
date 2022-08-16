    // CHECKING AN ARRAY FOR ODD AND EVEN NUMBERS, UPDATE THEIR VALUES, AND PUSH IT TO A NEW ARRAY.
// With higher order array methods
function checkAndUpdate(array) {
    let final = []
    let operated1 = array.filter(value => value % 2 == 0)
                        .map(element => element * 3)
    let operated2 = array.filter(value => value % 3 == 0)
                        .map(element => element * 2)
    
    for (let value of operated1) {
        final.push(value)
    }
    for (let value of operated2) {
        final.push(value)
    }

    return final;
}

// Revised version with the regular for loop
function checkAndUpdate(array) {
    let final = []

    for (let value of array) {
        if (value % 2 == 0) {
            final.push(value * 3)   
        } else {
            final.push(value * 2)
        }
    }

    return final;
}





//  BUILDING A TRIANGLE
function buildTriangle(height) {
    for (let i = "#"; i <= height; i += "#") {
        console.log(i);
    }
}





// A METHOD IN AN OBJECT
let profile = {
    name: "tobi",
    age: 21,
    legal: null,
    canDrink() {
        if (this.age >= 18) {
            this.legal = "yes"
            console.log("Database updated. He/She is old enough to drink")
        } else {
            this.legal = "underage"
            console.log("Database updated. He/She is underage and shouldn't be allowed to drink")
        }
    }
}

// REVISED EDITION - Using class and defining the method inside the prototype.
class Profile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.legal = null;
    }

    canDrink() {
        if (this.age >= 18) {
            this.legal = "yes"
            console.log("Database updated. He/She is old enough to drink")
        } else {
            this.legal = "underage"
            console.log("Database updated. He/She is underage and shouldn't be allowed to drink")
        }
    }
}





