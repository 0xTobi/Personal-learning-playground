const httpStatus = require("http-status-codes"),
    htmlContentType = {
        "Content-type": "text/html"
    },
    fs = require("fs"),
    getJSONString = obj => {
        return JSON.stringify(obj, null, 2)
    },
    routes = {
        "GET": {
           "/info": (req, res) => {
               res.writeHead(httpStatus.OK, {
                "Content-Type": "text/plain"
               })
               res.end("<h1>Welcome to the Info page</h1>");
           },
        //    "/img": (req, res) => {
        //        res.writeHead(httpStatus.OK, {
        //         "Content-Type": "image/png"
        //        })
        //        fs.readFile("public/images/apes2.png", (error, data) => {
        //            if (error) {
        //             console.log("Error reading the file...");
        //            }
        //            res.end(data);
        //        });
        //    }
        },

        "POST": {}
    };

    exports.handle = (req, res) => {
        try {
            if (routes[req.method][req.url]) {
                routes[req.method][req.url](req, res) 
            } else {
                res.writeHead(httpStatus.NOT_FOUND, htmlContentType)
                res.end("<h1>No such file exists</h1>")
            }
        } catch (err) {
            console.log(`error: ${err}`);
        }

        console.log(`METHOD: ${getJSONString(req.method)}`)
        console.log(`URL: ${getJSONString(req.url)}`)
    };

    exports.get = (url, action) => {
        routes["GET"][url] = action;
    }

    exports.post = (url, action) => {
        routes["POST"][url] = action;
    }