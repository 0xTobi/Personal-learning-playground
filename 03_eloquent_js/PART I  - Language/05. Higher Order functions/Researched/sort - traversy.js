
//                                                SORT

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


// Lets sort the companies by start year

    // Declaration function
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
