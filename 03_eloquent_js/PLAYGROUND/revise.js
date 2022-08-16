// function triangle(size) {
//     let triangle = "#"
//     for (let i = 1; i <= size; i++) {
//         console.log(triangle)
//         triangle += "#"
//     }
// }

// triangle(10)


// let triangle = size => {
//     let triangle = "#"
//     for (let i = 1; i <= size; i++) {
//         console.log(triangle)
//         triangle += "#"
//     }
//     return ("yes")
// }

// triangle(10)

function summation(x) {
    return (y) => x + y
}

let sum = summation(2)
sum(3)