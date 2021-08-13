"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
var host = "localhost";
app.get('/', function (req, res) {
    res.statusCode = 200;
    var jason = res.json({
        "nama": "Moh Ainul Yaqin",
        "umur": "21"
    });
    var ubah = JSON.stringify(jason);
    res.send({
        ubah: ubah
    });
});
app.listen(port, host, function () {
    console.log("The " + host + " was runing at " + port + " port");
});
module.exports = app;
