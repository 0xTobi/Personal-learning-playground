// If you type eloquentjavascript.net/18_http.html into your browser’s address bar, the browser first looks up the address of the 
// server associated with eloquentjavascript.net and tries to open a TCP connection to it on port 80, the default port for HTTP traffic.
// If the server exists and accepts the connection, the browser might send something like this:

// -> GET /18_http.html HTTP/1.1
// -> Host: eloquentjavascript.net      - header                                        - REQUEST
// -> User-Agent: Your browser's name   - header

// Then the server responds, through that same connection.

// -> HTTP/1.1 200 OK 
// -> Content-Length: 65585                             - header
// -> Content-Type: text/html                           - header    
// -> Last-Modified: Mon, 07 Jan 2019 10:29:45 GMT      - header                        - RESPONSE

// -> <!doctype html>                                    
// -> .. the rest of the document                       - "body", contains data being sent.

// The information sent by the client is called the request. It starts with this line.
// -> GET /18_http.html HTTP/1.1

// - The first word is the method of the request. GET means that we want to get the specified resource.
// - Other common methods are: 
//   DELETE to delete a resource, 
//   PUT to create or replace it, and 
//   POST to send information to it.
// - The part after the method name is the path of the resource the request applies to.
//   A resource may be anything that can be transferred as if it is a file.
// - After the resource path, the first line of the request mentions HTTP/1.1 to indicate the version of the HTTP protocol it is using.

// - The server’s response will start with a version as well, followed by the status of the response
//   first as a three-digit status code and then as a humanreadable string.
// - Status codes starting with a 2 indicate that the request succeeded.
//   Codes starting with 4 mean there was something wrong with the request.
//   Codes that start with 5 mean an error happened on the server and the request is not to blame.


//  HEADERS
// - The first line of a request or response may be followed by any number of "HEADERS". 
//   These are lines in the form name: value that specify extra information about the request or response.

//         name         value
// -> Content-Length: 65585 
// -> Content-Type: text/html
// -> Last-Modified: Thu, 04 Jan 2018 14:05:30 GMT

// - For most headers, the client and server are free to decide whether to include them in a request or response. But a few are required. 
//   For example, the "Host" header, which specifies the hostname, should be included in a request because a server might be serving 
//   multiple hostnames on a single IP address, and without that header, the server won’t know which hostname the client is trying to talk to.

// - GET and DELETE requests don’t send along any data (body)
// - PUT and POST requests sends data.
// - Error responses, do not require a body

