var arr = [ [1,2], [3,4], [5,6] ];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// [1, 2]
// [3, 4]
// [5, 6]
// undefined

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i]);
    }
}
// [1, 2]
// [1, 2]
// [3, 4]
// [3, 4]
// [5, 6]
// [5, 6]
// undefined

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[j]);
    }
}
// [1, 2]
// [3, 4]
// [1, 2]
// [3, 4]
// [1, 2]
// [3, 4]
// undefined


// Explanation 
// The first loop value "i" is taken into the second loop, and it keeps iterating with the value gotten from
// the outer loop till it gets a false boolean value, then the outer loops gains control and jumps to the next "i",
// which is then passed in to the inner loop once again, the inner loop iterates over and over with the same "i" 
// value until it gets a false boolean value, then again the outer loops gains control and moves on to the next "i" value.