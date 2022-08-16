// - In a SYNCHRONOUS programming model, things happen one at a time. 
// - When you call a function that performs a long-running action, it returns only when the action has finished and it can return the 
//   result. This stops your program for the time the action takes.

//  - An ASYNCHRONOUS model allows multiple things to happen at the same time. 
//  - When you start an action, your program continues to run. 
//  - When the action finishes, the program is informed and gets access to the result (for example, the data read from disk).

//  - Let's compare SYNCHRONOUS and ASYNCHRONOUS programming with a program that fetches two resources from the network, and then combines results.

//    - In a synchronous environment, where the request function returns only after it has done its work, 
//      the easiest way to perform this task is to make the requests one after the other. 
//    - This has the drawback that the second request will be started only when the first has finished. 
//    - The total time taken will be at least the "sum of the two response times."

//    - The solution to this problem, in a synchronous system, is to start additional threads of control. 
//    - A THREAD is another running program whose execution may be interleaved with other programs by the operating system 
//      since most modern computers contain multiple processors, multiple threads may even run at the same time, on different
//      processors. 
//    - A second thread could start the second request, and then both threads wait for their results to come back, after which 
//      they resynchronize to combine their results.

//  - Another way to describe the difference is that:
//    - Waiting for actions to finish is implicit in the SYNCHRONOUS model,     Implicit = DEPENDENT
//    - while it is explicit, under our control, in the ASYNCHRONOUS one.       explicit = INDEPENDENT

//  - Both of the important JavaScript programming platforms—browsers and Node.js—make operations that might take a while 
//    asynchronous, rather than relying on threads




//  - PROGRAMMING WITH THREADS IS NOTORIOUSLY HARD,
//    (understanding what a program does is much more difficult when it’s doing multiple things at once),





