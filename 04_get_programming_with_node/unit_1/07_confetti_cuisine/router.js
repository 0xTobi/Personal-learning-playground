const httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils"),
    getJSONString = obj => {
        return JSON.stringify(obj, null, 2)
    };

const routes = {
    "GET": {},
    "POST": {}
};

exports.handle = (req, res) => {
    console.log("Received an incoming request")

    try {
        routes[req.method][req.url](req, res)
    } catch (error) {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/error.html", res);
    }

    console.log(`METHOD: ${getJSONString(req.method)}`)
    console.log(`URL: ${getJSONString(req.url)}`)
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
}