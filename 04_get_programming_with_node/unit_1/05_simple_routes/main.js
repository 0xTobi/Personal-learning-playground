const { getMaxListeners } = require("process")

const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>", 
    "/about": "<h1>Learn More About Us.</h1>", 
    "/hello": "<h1>Say hello by emailing us here <a href='mailto:aderibigbetobi1@gmail.com'>Gmail</a></h1>",
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};

const getJSONString = obj => {
    return JSON.stringify(obj, null, 2)
}

// const port = 3000,
//     http = require("http"),                             // Require the http and http-status-codes modules
//     httpStatus = require("http-status-codes"),
//     getJSONString = obj => {
//         return JSON.stringify(obj, null, 2)
//     },
//     app = http.createServer((request, response) => {    // Creates the server with request and response parameters.
//         console.log("Received an incoming request!");

//         response.writeHead(httpStatus.OK, {             // Writes the head of the response. 
//             "content-type": "text/html"
//         });

//         if (routeResponseMap[request.url]) {
//             setTimeout(() => response.end(routeResponseMap[request.url]), 5000);
//         } else {
//             response.end("<h1>Welcome</h1>")
//         }

//         console.log(`METHOD: ${getJSONString(request.method)}`)
//         console.log(`URL: ${getJSONString(request.url)}`)
//         console.log(`HEADERS: ${getJSONString(request.headers)}`)
//     }); 

// app.listen(port)
// console.log(`The server has started and is listening on port number: ${port}.`)


const port = 3001,
    http = require("http"),                             
    httpStatus = require("http-status-codes"),

    app = http.createServer((request, response) => {    
        console.log("Received an incoming request!");

        if (request.url == "/error") {
            response.writeHead(httpStatus.NOT_FOUND, {             
                "content-type": "text/html"
            });
        } else {
            response.writeHead(httpStatus.OK, {             
                "content-type": "text/html"
            });
        };

        if (routeResponseMap[request.url]) {
            setTimeout(() => response.end(routeResponseMap[request.url]), 5000);
        } else {
            response.end("<h1>Welcome</h1>")
        }

        console.log(`METHOD: ${getJSONString(request.method)}`)
        console.log(`URL: ${getJSONString(request.url)}`)
        // console.log(`HEADERS: ${getJSONString(request.headers)}`)
    }); 

app.listen(port)
console.log(`The server has started and is listening on port number: ${port}.`)