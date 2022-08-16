//  Assertions are checks inside a program that verify that something is the way it is supposed to be.
//  They are used not to handle situations that can come up in normal operation but to find programmer mistakes.

//  - If, for example, "firstElement" is described as a function that should never be called on empty arrays, 
//    we might write it like this:
function firstElement(array) { 
    if (array.length == 0) { 
        throw new Error("firstElement called with []");
    } 
    return array[0];
}
//  - Now, instead of silently returning undefined (which you get when reading an array property that does not exist), 
//    this will loudly blow up your program as soon as you misuse it. This makes it less likely for such mistakes 
//    togo unnoticed and easier to find their cause when they occur.

