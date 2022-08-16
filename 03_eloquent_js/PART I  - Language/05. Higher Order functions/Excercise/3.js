function every(array, test) {
    for (element of array) {    // iterates over the elements in the array.
        if (!test(element)) {   // The "!" operator inverts the true boolean value for every element that returns true when tested.
            return false;       // If the test function produces false, then return FALSE   
        }
    }
    return true;
}

function every2(array, test) {
    return !array.some(c => !test(c))
}

every([1,2,3,11], c => c < 10)