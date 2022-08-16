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

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]


//                                          FILTER  - Allows us to filter things from the array.

// Say we want to get all of the ages that are 21 and over from the agess array.

    // Using a for loop
    let canDrink = [];
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= 21) {
            canDrink.push(ages[i]);
        }
    }
    console.log(canDrink);

    // Using filter

    // Declaration function
    const canDrink = ages.filter(function(age) {    // A function that takes age as a parameter....Note! age is a value gotten from the ages array. It picks the elements of the array one after the other.
        if (age > 21) {
            return true     // All it does is return a true boolean value that signifies that this value should be included in the filtered ages array.
        }
    })
    console.log(canDrink);

    // With ES6 arrow function
    const canDrink = ages.filter(age => (age >= 21));   // The arrow function just takes in a parameter age, and a condition, if the condition given to it produces a true boolean value, then it includes that element in the filtered array
    console.log(canDrink)



// Filter retail companies.

    // Declaration functions
    const retailCompanies = companies.filter(function(company) {
        if (company.category === 'Retail') {
            return true;
        }
    })
    console.log(retailCompanies)

    // ES6 arrow function
    const retailCompanies = companies.filter(company => (company.category === 'Retail'));   // Note!! If you have more than one parameter then you must wrap them in a paranthesis. e.g ((company, index, companies) => .........;
    console.log(retailCompanies)


// Filter companies that started in the 80's.

    // Declaration function
    const eightiesCompanies = companies.filter(function(company) {
        if (company.start >= 1980 && company.start < 1990) {
            return true;
        }
    })
    console.log(eightiesCompanies);

    // With ES6 arrow function.
    const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
    console.log(eightiesCompanies);


// Filter companies that lasted at least 10 years.

    // Declaration function
    const overNineYears = companies.filter(function(company) {
        if (company.end - company.start >= 10) {
            return true;
        }
    });
    console.log(overNineYears);
    
    // Arrow function
    const overNineYears = companies.filter(company => (company.end - company.start >= 10));
    console.log(overNineYears);



