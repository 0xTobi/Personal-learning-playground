//                                                    SUMMARIZING WITH REDUCE


var SCRIPTS = [{
        name: "Adlam",
        ranges: [
            [125184, 125259],
            [125264, 125274],
            [125278, 125280]
        ],
        direction: "rtl",
        year: 1987,
        living: true,
        link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
    },
    {
        name: "Caucasian Albanian",
        ranges: [
            [66864, 66916],
            [66927, 66928]
        ],
        direction: "ltr",
        year: 420,
        living: false,
        link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
    },
    {
        name: "Ahom",
        ranges: [
            [71424, 71450],
            [71453, 71468],
            [71472, 71488]
        ],
        direction: "ltr",
        year: 1250,
        living: false,
        link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
    },
    {
        name: "Arabic",
        ranges: [
            [1536, 1541],
            [1542, 1548],
            [1549, 1563],
            [1564, 1565],
            [1566, 1567],
            [1568, 1600],
            [1601, 1611],
            [1622, 1648],
            [1649, 1757],
            [1758, 1792],
            [1872, 1920],
            [2208, 2229],
            [2230, 2238],
            [2260, 2274],
            [2275, 2304],
            [64336, 64450],
            [64467, 64830],
            [64848, 64912],
            [64914, 64968],
            [65008, 65022],
            [65136, 65141],
            [65142, 65277],
            [69216, 69247],
            [126464, 126468],
            [126469, 126496],
            [126497, 126499],
            [126500, 126501],
            [126503, 126504],
            [126505, 126515],
            [126516, 126520],
            [126521, 126522],
            [126523, 126524],
            [126530, 126531],
            [126535, 126536],
            [126537, 126538],
            [126539, 126540],
            [126541, 126544],
            [126545, 126547],
            [126548, 126549],
            [126551, 126552],
            [126553, 126554],
            [126555, 126556],
            [126557, 126558],
            [126559, 126560],
            [126561, 126563],
            [126564, 126565],
            [126567, 126571],
            [126572, 126579],
            [126580, 126584],
            [126585, 126589],
            [126590, 126591],
            [126592, 126602],
            [126603, 126620],
            [126625, 126628],
            [126629, 126634],
            [126635, 126652],
            [126704, 126706]
        ],
        direction: "rtl",
        year: 400,
        living: true,
        link: "https://en.wikipedia.org/wiki/Arabic_script"
    },
    {
        name: "Imperial Aramaic",
        ranges: [
            [67648, 67670],
            [67671, 67680]
        ],
        direction: "rtl",
        year: 800,
        living: false,
        link: "https://en.wikipedia.org/wiki/Aramaic_alphabet"
    },
    {
        name: "Armenian",
        ranges: [
            [1329, 1367],
            [1369, 1376],
            [1377, 1416],
            [1418, 1419],
            [1421, 1424],
            [64275, 64280]
        ],
        direction: "ltr",
        year: 405,
        living: true,
        link: "https://en.wikipedia.org/wiki/Armenian_alphabet"
    },
    {
        name: "Avestan",
        ranges: [
            [68352, 68406],
            [68409, 68416]
        ],
        direction: "rtl",
        year: 400,
        living: false,
        link: "https://en.wikipedia.org/wiki/Avestan_alphabet"
    },
    {
        name: "Balinese",
        ranges: [
            [6912, 6988],
            [6992, 7037]
        ],
        direction: "ltr",
        year: 1000,
        living: true,
        link: "https://en.wikipedia.org/wiki/Balinese_script"
    },
    {
        name: "Bamum",
        ranges: [
            [42656, 42744],
            [92160, 92729]
        ],
        direction: "ltr",
        year: 1896,
        living: true,
        link: "https://en.wikipedia.org/wiki/Bamum_script"
    },
    {
        name: "Bassa Vah",
        ranges: [
            [92880, 92910],
            [92912, 92918]
        ],
        direction: "ltr",
        year: 1950,
        living: false,
        link: "https://en.wikipedia.org/wiki/Bassa_alphabet"
    },
    {
        name: "Batak",
        ranges: [
            [7104, 7156],
            [7164, 7168]
        ],
        direction: "ltr",
        year: 1300,
        living: true,
        link: "https://en.wikipedia.org/wiki/Batak_alphabet"
    },
    {
        name: "Bengali",
        ranges: [
            [2432, 2436],
            [2437, 2445],
            [2447, 2449],
            [2451, 2473],
            [2474, 2481],
            [2482, 2483],
            [2486, 2490],
            [2492, 2501],
            [2503, 2505],
            [2507, 2511],
            [2519, 2520],
            [2524, 2526],
            [2527, 2532],
            [2534, 2558]
        ],
        direction: "ltr",
        year: 1050,
        living: true,
        link: "https://en.wikipedia.org/wiki/Bengali_alphabet"
    },
    {
        name: "Bhaiksuki",
        ranges: [
            [72704, 72713],
            [72714, 72759],
            [72760, 72774],
            [72784, 72813]
        ],
        direction: "ltr",
        year: 1050,
        living: false,
        link: "https://en.wikipedia.org/wiki/Bhaiksuki_alphabet"
    }
];


// To calculate the sum of all the elements in an array.
function reduce(array, combine, start) { // Takes 3 parameters. An array, a function and a start value.
    let current = start;
    for (let element of array) { // iterates over the elements of the given array.
        current = combine(current, element) // current = combine which is a function that takes 2 parameters.
    }
    return current; // After the combine function is executed and assigned to current.
}
console.log(reduce(([1, 2, 3, 4, 5]), (a, b) => a + b, 0));
// Here, initially total = 0, and element starts iterating from the first element in the array. Adds first element to the current total value(0) and saves the new value, then adds the second element to the new total value, and again save that as the new value. And so on.....



// Using reduce to find the script with the most characters.

// ranges [[from, to]]: [[125184, 125259], [125264, 125274], [125278, 125280]]
// Finding the sum of the ranges of each script.
function characterCount(script) { // A function that evaluates the total of the ranges after subtracting the "to" from the "from"
    return script.ranges.reduce((total, [from, to]) => total + (to - from), 0); // The reduce method takes two parameters, "total" which is set to 0 initially, and an array that signifies the current array in the range array
}
console.log(characterCount(SCRIPTS[0])) // This returns the total of the range array of the first entry in the SCRIPTS array.
console.log(characterCount(SCRIPTS[3])) // This returns the total of the range array of the second entry in the SCRIPTS array.

// Fnding the largest script with Higher Order Function
let largestRange = SCRIPTS.reduce((a, b) => characterCount(a) > characterCount(b) ? a : b) // This reduce method takes two entries from the SCRIPTS array and evaluates, then returns the largest.  !! Note that 0 is not assigned to "a"
console.log(largestRange);

console.log(`I'm smiling hard U+1F600`)