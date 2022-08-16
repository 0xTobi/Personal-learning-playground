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


// looping with a for loop 
for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}; 

// looping with forEach - A better way to loop through an array.
companies.forEach(function(company) {
    console.log(company)
});




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



//                      MAP - Instead of filtering things out we can create new arrays from a current array

// Grab all the company names and put them into their own array.

    // Declaration function
    const companyNames = companies.map(function(company) {
        return company.name;
    })
    console.log(companyNames);

    // Using arrow function 
    const companyNames = companies.map(company => company.names)
    console.log(companyNames);


// Getting the squareroot of all the elements in the ages array.

    // Declaration function
    const squareRoot = ages.map(function(age) {
        return Math.sqrt(age);
    })  
    console.log(squareRoot);

    // Using arrow function 
    const squareRoot = ages.map(age => Math.sqrt(age));
    console.log(squareRoot);
    
    
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



//                                                SORT


// Lets sort the companies by start year

    // Declaration Function
    const sortedCompanies = companies.sort(function(c1, c2) {   // Takes two parameters(two companies) and  compares them.
        if (c1.start > c2.start) {  // If the start year of the first is greater than the start year of the second:
            return 1;               // Return 1.
        } else {                    // Else if the start year of the first is lesser than or equal to the start year of the second:
            return -1;              // Return -1
        }
    });
    console.log(sortedCompanies);

    // Arrow function
    const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1))  // Ternary operator(?) evaluates the condition on the right and returns the middle value(1) if it's true, else it returns the value to the right(-1) if it's false.
    console.log(sortedCompanies);

    // The sort function uses the return values to evaluate how to sort a given array. It puts the one with a (negative) return expression before the one with a (positive) return value.


// Sort ages array from lowest to highest.

    // Declaration Function
    const ageSort = ages.sort(function(c1, c2) {
        if (c1 > c2) {
            return 1;
        } else {
            return -1;
        }
    })
    console.log(ageSort);

    // Arrow Function
    const ageSort = ages.sort((a, b) => (a > b ? 1 : -1));  // Or const ageSort = ages.sort((a, b) => a - b);  ......  ("a - b" for Descending order)  ("b - a" for ascending order).
    console.log(ageSort);



//                                                  REDUCE


// To add all of the ages together.

    // For loop.
    let result = 0;
    for (let i = 0; i < ages.length; i++) {
        result = result + ages[i]
    }
    console.log(result);

    // Reduce + Declaration function
    const agesSum = ages.reduce(function(total, age) {
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



//                                          Combining methods

let combined = ages
    .map(age => age * 2)        // Multiplies all the entries in the ages array by two.
    .filter(age => age >= 40)   // Filters ages that are greater than or equal to 40. Note they've previously been multiplied by two.
    .sort((a, b) => a - b)      // Sorts the filtered array in ascending order.
    .reduce((total, age) => total + age, 0)     // Adds up the elements in the sorted out array.
console.log(combined)
