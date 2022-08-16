// Fill in this regular expression.
let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
//  - Within square brackets, a hyphen (-) between two characters can be used to indicate a range of characters, 
//    so we add a backslash before it, because we want to include it in our pattern.

//  - For example, [\d.] means any digit or a period character. But the period itself, between square brackets, 
//    loses its special meaning. The same goes for other special characters, such as +*

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}


//  EXPLANATION 
let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
//  ^
//  [+\-]?        -   Since any special character(.+*) inside a square bracket loses its meaning, we can include it without a backslash, 
//                    but an hyphen(-) within a square bracket still means something, so we must add a backslash if we want to include it in our pattern.
//                    the question mark(?) means it will match when found and otherwise.
//  (d+(\.\d*))   -   

