import { result } from "lodash";
import { sumValues } from "./sum"; 


export function asyncAdd(values) { 
    setTimeout(() => {
        let total = sumValues(values); 
        console.log(`Async Total: ${total}`); 
        return total;   
        // This function's return value is available aft6er the delay.
    }, 500);
}

// To solve the problem in the previous code, I need a mechanism that allows me to observe the asynchronous task so that I can wait for it to complete 
// and then write out the result.
// This is the role of JAVASCRIPT PROMISES.


export function asyncAddFixed(values) { 
    return new Promise(callback =>
        setTimeout(() => {
            let total = sumValues(values);
            console.log(`Async Total: ${total}`);
            callback(total);
            // This callback is invoked when the asynchronous task is completed.
            // Invoking the callback is known as RESOLVING THE PROMISE.
        }, 500));
} 

