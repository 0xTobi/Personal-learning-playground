//  - NETWORKS AND THE INTERNET-----------------------
//  - A network protocol describes a style of communication over a network.
//  - For example, the Hypertext Transfer Protocol (HTTP) is a protocol for retrieving named resources (chunks of information, 
//    such as web pages or pictures).

//  - A TCP connection works as follows: one computer must be waiting, or listening, for other computers to start talking to it.

//  - To be able to listen for different kinds of communication at the same time on a single machine, each listener has a number 
//    (called a port) associated with it. 
//  - For example, when we want to send an email using the SMTP protocol, the machine through which we send it is expected to be 
//    listening on port 25.
//  - Another computer can then establish a connection by connecting to the target machine using the correct port number.
//  - The listening computer is called the server, and the connecting computer is called the client.



//  - THE WEB---------------------------------------------
//  - The WorldWideWeb is a set of protocols and formats that allow us to visit web pages in a browser.
//  - To become part of the web, all you need to do is connect a machine to the internet and have it listen on port 80 with the 
//    HTTP protocol so that other computers can ask it for documents.

//  - Each document on the web is named by a Uniform Resource Locator (URL)

//  -       http://eloquentjavascript.net/13_browser.html
//          |     |                     |               |
//         Protocol       Server              Path

//  - The first part tells us that this URL uses the HTTP protocol.
//  - Then comes the part that identifies which server we are requesting the document from. 
//  - Last is a path string that identifies the specific document (or resource) we are interested in.

//  - Machines connected to the internet get an IP address, which is a number that can be used to send messages to that machine
//  - You can instead register a domain name for a specific address or set of addresses. E.g. eloquentjavascript.net to point to an IP address.
//  - If you type this URL into your browser’s address bar, the browser will try to retrieve and display the document at that URL. 
//  - First, your browser has to find out what address eloquentjavascript.net refers to. 
//  - Then, using the HTTP protocol, it will make a connection to the server at that address and ask for the resource /13_browser.html. 
//  - If all goes well, the server sends back a document, which your browser then displays on your screen.



//  - HTML-------------------------------------------------
//  - HTML, which stands for Hypertext Markup Language, is the document format used for web pages. 
//  - An HTML document contains text, as well as tags that give structure to the text, describing things such as links, paragraphs, 
//    and headings.


//  - IN THE SANDBOX---------------------------------------
//  - Running programs downloaded from the internet is potentially dangerous.
//  - Browsers severely limit the things a JavaScript program may do: it can’t look at the files on your computer or modify anything 
//    not related to the web page it was embedded in.
//  - Isolating a programming environment in this way is called SANDBOXING,

