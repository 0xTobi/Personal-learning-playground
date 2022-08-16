let tester = (value, test) => {
    if (value < 0) {
        console.log(`${value} is a negative number. We don't interact with such numbers!`)
    }
    else if (test(value)) {
        console.log(`${value} is even`)
    }else {
        console.log(`${value} is odd`)
    }
}

tester(5, b => b % 2 == 0);


// let tester = (_, test) => test(new Error("fuck!!"))




let newi = new Promise((resolve, reject) => {
    let done = false;
    if(done) {
        resolve("done")
    } else {
        reject("failed")
    }
    throw new SyntaxError("failed")
});

let nest = [1,2,3,4,5,6]
nest.filter((y,z) => (y > 2 && y < 6))


//  Code 1
    let obj = {
        name: "tobi",
        age: 20,
        height: "7 Feets",
        Gender: "Male"
    }
for (let keys of Object.keys(obj)) {
    console.log("key " + (Object.keys(obj).indexOf(keys) + 1) + ": " +  keys)
}
// for (let keys of Object.keys(obj)) {
//     let array = Object.keys(obj)
//     console.log("key " + (array.indexOf(keys) + 1) + ": " +  keys)
// }

// Code 2
let obj2 = {
    name: "tobi",
    age: 20,
    height: "7 Feets",
    Gender: "Male"
}

for (let i = 0; i < (Object.keys(obj2)).length; i++) {
    console.log(`key ${i + 1}: ${(Object.keys(obj)[i])}`)
}


