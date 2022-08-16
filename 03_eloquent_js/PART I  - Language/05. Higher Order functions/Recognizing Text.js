
function countBy(items, groupName) { 
    let counts = [];    // Stores an array that contains two objects. [{name: true}, {name: false}].
    for (let item of items) { 
        let name = groupName(item);     // Evaluates the current item with the groupName function, and stores the voolean value in the name variable.
        let known = counts.findIndex(c => c.name == name);      // The findIndex method takes a function. if that function is evaluated and it returns true, then it returns the index of that element(object in this case) in the "counts" array, and does not check the remaining values. If it does'nt find such value it returns -1
        if (known == -1) { 
            counts.push({name, count: 1});
        } else { 
            counts[known].count++; 
        }
    }
    return counts;
}
console.log(countBy([1, 2, 3, 4, 5], n => n > 3));


// WORKING PRINCIPLE
// -- Takes the first item in the items array (1), and passes it as an argument to the groupName function to be evaluated. Once evaluated it returns "false"
// Since our counts array is empty at the start. findIndex tries to check if will find a "c.name" value that returns true when the function is executed, but no it does'nt. So it returns false which = -1
// known is -1 so the if statement pushes {name: false, count: 1} into the counts array.   Our counts array now looks something like this: counts = [{name: false, count: 1}].
// -- Takes the second item in the items array (2). Once evaluated by the groupName function, it returns "false"
// Remember our counts array is now (counts = [{name: false, count: 1}]). When findIndex executes the function to check whether "c.name == false" it returns "true". So findIndex returns the index of that object in the counts array. index = 0
// known is "0" so the else statement is executed, and it adds 1 to the .count property of the object found in the returned index "0".
// -- Takes the third item from the counts items array (3), which also returns true when evaluated, so 1 is again added to the .count property of the object in that returned index "0"
// So we now have (counts = [{name: false, counts: 3}])
// -- Takes the fourth item (4), returns "true" 
// When the findIndex is executed, it checks if there's any c.name value that eturns true when compared to "name = true" from the name variable. But it does'nt find any, so it returns "false" which the findIndex converts to -1.
// Since known returns -1. The "if" branch is taken and it pushes {name: true, count: 1} into the counts array. Our counts array now looks something like this: counts = [{name: false, count: 3}, {name: true, count: 1}].
// -- Takes the last item (5) from the items array, and passes it as an argument to the groupName function which returns "true" and is stored in the name variable.
// The findIndex checks the counts array to see if it will find any element that returns "true". It successfully locates such element in the "1" index of the counts array, wehere {name: true, count: 1}.. So it returns the index of the element in the counts array which is (1).
// Since known is != -1. The "else" branch is taken and it adds 1 to the current count property value. So we now have counts = [{name: false, count: 3}, {name: true, count: 2}].
// -- The program comes to an end.
