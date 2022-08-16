// REST PARAMETERS



function max(...numbers) {      // A function that accepts any number of given arguments.
    let result = -Infinity;    
    for (let number of numbers) { 
        if (number > result) {
            result = number;
        }
    } 
    return result; 
}
console.log(max(4, 1, 9, -2));
// 9

let numbers = [5, 1, 7]; 
console.log(max(17, ...numbers, 20, 72));    // three-dot notation used to call a function with an array of arguments. It spreads out the array into the function call, passing its elements as separate arguments.
// 72


let myName =  ["Tobi", "Aderibige"]
console.log("Olumide Silas", "Akinsola Olumide", ...myName, "Urum Uche");   // The ...myName spreads out the content of the myName array.




