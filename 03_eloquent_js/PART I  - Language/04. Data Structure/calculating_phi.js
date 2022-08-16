// COMPUTING CORRELATION

//Calculates the phi of a 2 X 2 table.
// Javascript Expression gotten from the mathematical phi formula.

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
    }
console.log(phi([76, 9, 4, 1]));

    


