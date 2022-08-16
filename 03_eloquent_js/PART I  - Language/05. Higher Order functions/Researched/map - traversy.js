//                      MAP - Instead of filtering things out we can create new arrays from a current array

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

// Grab all the company names and put them into their own array.

    // Declaration function
    const companyNames = companies.map(function(company) {
        return `${company.name} [${company.start} - ${company.end}]`;  // This returns the companies names and their start and end year.
    })
    console.log(companyNames);

    // using arrow function
    const companyNames = companies.map(company => (`${company.name} [${company.start} - ${company.end}]`));
    console.log(companyNames);


// Getting the squareroot of all the elements in the ages array.

    // for loop 
    let mapped = []
    for (let age of ages) {
        mapped.push(Math.sqrt(age));
    }
    console.log(mapped);
    
    // Declaration function
    const ageSquare = ages.map(function(age) {
        return Math.sqrt(age);
    })  
    console.log(ageSquare);

    // Using arrow function 
    const ageSquare = ages.map(age => Math.sqrt(age));


// Using two maps e.g we want to find the squareroot of the array and then times it by 2.
    
    // Declaration function
    const ageMap = ages
    .map(function(age) {
        return Math.sqrt(age);      // First take the root of all the numbers.
    })
    .map(function(age) {
        return age * 2;             // Then times them by 2.
    });
    console.log(ageMap);
    
    // Arrow function 
    const ageMap = ages
        .map(age => Math.sqrt(age))
        .map(age => age * 2);

    console.log(ageMap);


