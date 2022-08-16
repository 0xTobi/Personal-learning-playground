//                                                  REDUCE

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
]

let ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]


let totalCompanies = companies.reduce((total, company) => total + (company.end - company.start), 0)

let totalCo = 0
for (let i = 0; i < companies.length; i++) {
    totalCo = totalCo + (companies[i].end - companies[i].start)
}
console.log(totalCo)


// To add all of the ages together.

    // For loop.
    let result = 0;
    for (let i = 0; i < ages.length; i++) {
        result = result + ages[i]
    }
    console.log(result);

    // Reduce + Declaration function
    const agesSum1 = ages.reduce(function(total, age) {
        return total + age;
    }, 0);      // Takes in a second parameter of the total which is going to be zero - If you don't include the zero, you'll get a weird answer.
    console.log(agesSum);

    // Reduce + arrow function
    const agesSum = ages.reduce((total, age) => total + age, 0);
    console.log(agesSum);


// To get the total years for all companies.

    // For loop
    let totalYear = 0;
    for (let company of companies) {
        let year = company.end - company.start;
        totalYear = totalYear + year;
    }
    console.log(totalYear);

    // Reduce + Declaration function
    let totalYear = companies.reduce(function(total, company) {
        let year = company.end - company.start;
        return total + year;
    }, 0);
    console.log(totalYear); 

    // Reduce + Arrow function
    let totalYear = companies.reduce((total, company) => total + (company.end - company.start), 0)
    console.log(totalYear)

