
//  - many JavaScript projects aren’t even, technically, written in JavaScript. 
//  - There are extensions, such as the type checking dialect mentioned in “Types” that are widely used.
//  - People also often start using planned extensions to the language long before they have been added to the platforms 
//    that actually run JavaScript. 
// - To make this possible, they --compile-- their code, translating it from their chosen JavaScript dialect to plain old 
//   JavaScript—or even to a past version of JavaScript—so that old browsers can run it.

//  - If fetching a single file over the network takes 50 milliseconds, loading the whole program takes 10 seconds, 
//    or maybe half that if you can load several files simultaneously. 
//  - That’s a lot of wasted time. Because "fetching a single big file tends to be faster than fetching a lot of tiny ones", 
//    web programmers have started using tools that roll their programs (which they painstakingly split into modules) back 
//    into a single big file before they publish it to the web. Such tools are called --bundlers--.


//  - And we can go further. Apart from the number of files, the size of the files also determines how fast they can be 
//    transferred over the network. 
//  - Thus, the JavaScript community has invented --minifiers--. 
//  - These are tools that take a JavaScript program and make it smaller by automatically removing comments and whitespace, 
//    renaming bindings, and replacing pieces of code with equivalent code that take up less space. 
//  - So it is not uncommon for the code that you find in an NPM package or that runs on a web page to have gone 
//    through -multiple- stages of transformation—converted from modern JavaScript to historic JavaScript, 
//    from ES module format to CommonJS, bundled, and minified. 



//  - """""""Just be aware that the JavaScript code you run is often not the code as it was written.""""""""





