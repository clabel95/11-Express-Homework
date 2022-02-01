const express = require("express");
const fs = require("fs");


var exp = express();
var PORT = process.env.PORT || 3001

exp.use(express.urlencoded({ extended: true }));
exp.use(express.json());
exp.use("/public/assets", express.static("./public/assets"));


require("./routs/html_route")(exp);
require("./routs/api_route")(exp);

exp.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});