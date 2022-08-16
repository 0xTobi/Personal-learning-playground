import additionFunction from "./sum"
import oddOnly, { sumValues } from "./sum";
import { multiply, subtract as deduct } from "./operations";
import { asyncAdd } from "./async";
import { asyncAddFixed } from "./async";



// Using Promises.
// // console.log("Promises-------------------")
// let total2 = asyncAdd(values);
// console.log(`Main Total: ${total2}`);

// Javascript Promises
// asyncAdd(values).then(total => console.log(`Main Total: ${total}`)); 

// Using "async" and "await"
// async function doTask() { 
//     let total = await 
//     asyncAdd(values); 
//     console.log(`Main Total: ${total}`);
// }

// doTask();





let values = [10, 20, 30, 40, 50];

let total = asyncAdd(values);
// The return value from asyncAdd is provided after 0,5 sec
// But the browser doesn't wait for the value to be returned, it goes to the next statement.

console.log(`Main Total: ${total}`); 
// This statement requires the value returned by the asyncAdd function which is not avaiolable yet.
// So it returns undefined.



// USING JAVASCRIPT PROMISES TO FIX THE LIMITATION IN THE PREVIOUS CODE.
asyncAddFixed(values).then(total => console.log(`Main Total: ${total}`))


// USING ASYNC AND AWAIT KEYWORDS INSTEAD OF THE ".THEN" METHOD
async function doTask() {
    let total = await(asyncAddFixed(values));
    console.log(`Main Total: ${total}`)
}
doTask();
