var express = require("express");
var GoogleSpreadsheet = require("google-spreadsheet");
var router = express.Router();

router.get("/", function (request, response) {
    response.render("index", { title: "CodeTheSouth" });
});

router.post("/spreadsheets/:id/sync", function (request, response, next) {
    console.info("We made it!");
    var id = request.params.id;
    var sheet = new GoogleSpreadsheet(id);
    var row = {
        "timestamp": new Date().getTime(),
        "name": "John Doe",
        "email": "john@doe.com",
        "message": "It worked!"
    }
    sheet.addRow(row, function (error) {
        if (error) {
            console.log("Error man! You screwed up!");
        }
        else {
            console.log("It worked!");
        }
    });
});

module.exports = router;