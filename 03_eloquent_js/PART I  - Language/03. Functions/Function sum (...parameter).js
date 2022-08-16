function sum(...digits) {
    let result = 0;
    for (let digit of digits) {
        result = result + digit;
    }
    return result
}

console.log(sum(1,2,3,4,5,6,7,8,9))