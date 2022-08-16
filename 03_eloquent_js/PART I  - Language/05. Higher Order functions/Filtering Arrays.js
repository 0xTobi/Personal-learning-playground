var SCRIPTS = [
    {
      name: "Adlam",
      ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
      direction: "rtl",
      year: 1987,
      living: true,
      link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
    },
    {
      name: "Caucasian Albanian",
      ranges: [[66864, 66916], [66927, 66928]],
      direction: "ltr",
      year: 420,
      living: false,
      link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
    }
];

function filter(array, test) {      // Takes two arguments. an array and a function.
    let passed = [];
    for (let element of array) {    // takes each element of the array from ltr.
        if (test(element)) {        // If the test(element) is evaluated and it produces a true boolean value, then:
            passed.push(element)    // push the element into the passed array.
        }
    }
    return passed;                  // Return passed.
}
console.log(filter(SCRIPTS, script => script.living));  // the filter function is invoked with arguments(array = SCRIPTS, test = script => script.living)
//  let's rewrite the arrow function(script => script.living) to to a declaration function to better understand. 
//  function test(script) {script.living}....................So when test is invoked with an array from the SCRIPT object passed as an argument. test([array]).
//  And remember test checks for the boolean value of the "living: " property in the object entry. If the value is true, then it pushes that entry to the passed array.




// To return a filtered array of elements that are greater than or equal to 21.

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

function filter(array, test) {
  let passed = [];
  for (let age of ages) {
    if (test(age)) {
      passed.push(age);
    }
  }
  return passed;
}

console.log(filter(ages, age => age >= 21));