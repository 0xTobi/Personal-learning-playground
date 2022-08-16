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

function map(array, test) {
    let mapped = [];
    for (element of array) {
        mapped.push(test(element));
    }
    return mapped;
}

let rtlScripts = SCRIPTS.filter(script => script.direction == "rtl");
console.log(map(rtlScripts, script => script.name));