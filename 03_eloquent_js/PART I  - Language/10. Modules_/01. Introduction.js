//  INTRO
//  The ideal program has a crystal-clear structure. The way it works is easy to explain, and each part plays a well-defined role.

//  - A typical real program grows organically. 
//  - New pieces of functionality are added as new needs come up. 
//  - Structuring—and preserving structure—is additional work. 
//  - It’s work that will pay off only in the future, the next time someone works on the program. 
//  - So it is tempting to neglect it and allow the parts of the program to become deeply entangled.

//  - This causes two practical issues. 
//  - First, understanding such a system is hard.
//    If everything can touch everything else, it is difficult to look at any given piece in isolation. 
//    You are forced to build up a holistic understanding of the entire thing. 
//  - Second, if you want to use any of the functionality from such a program in another situation,
//    rewriting it may be easier than trying to disentangle it from its context.

//  - The phrase “big ball of mud” is often used for such large, structureless programs. 
//  - Everything sticks together, and when you try to pick out a piece, the whole thing comes apart, and your hands get dirty.



//  MODULES AS BUILDING BLOCKS.------------
//  - Modules are an attempt to avoid these problems. 
//  - A module is a piece of program that specifies which other pieces it relies on and which functionality it provides for other 
//    modules to use --(its interface)--.
//  - The relations between modules are called dependencies. 
//  - When a module needs a piece from another module, it is said to depend on that module.
//    When this fact is clearly specified in the module itself, it can be used to figure out which other modules need to be present 
//    to be able to use a given module and to automatically load dependencies.

//  - To separate modules in that way, each needs it own private scope.
//  - Just putting your JavaScript code into different files does not satisfy these requirements.
//    The files still share the same global namespace. They can, intentionally or accidentally, interfere with each other’s bindings.



//  PACKAGES--------------------------------
//  - One of the advantages of building a program out of separate pieces, and being actually able to run those pieces on their own, 
//    is that you might be able to apply the same piece in different programs.
//  - Once you start duplicating code, you’ll quickly find yourself wasting time and energy moving copies around and keeping 
//    them up to date. 
//  - That’s where packages come in. A package is a chunk of code that can be distributed (copied and installed). 
//    - It may contain one or more modules and has information about which other packages it depends on. 
//    - A package also usually comes with documentation explaining what it does so that people
//      who didn’t write it might still be able to use it.
//    - When a problem is found in a package or a new feature is added, the package is updated. 
//      Now the programs that depend on it (which may also be packages) can upgrade to the new version.
//  - Working in this way requires infrastructure. 
//  - We need a place to store and find packages and a convenient way to install and upgrade them. 
//  - In the JavaScript world, this infrastructure is provided by NPM (https://npmjs.org). 
//  - NPM is two things: 
//    - an online service where one can download (and upload) packages, 
//    - and a program (bundled with Node.js) that helps you install and manage them.

  