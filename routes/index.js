var express = require("express");
var GoogleSpreadsheet = require("google-spreadsheet");
var router = express.Router();
var async = require('async');

router.get("/", function (request, response) {
    response.render("index", { title: "CodeTheSouth" });
});

router.post("/spreadsheets/:id/sync", function (request, response, next) {
    var id = request.params.id;
    console.info("Received call with id: " + id);
    console.info("Form data: " + request.body);

    var sheet = new GoogleSpreadsheet(id);
    var row = {
        "timestamp": new Date().getTime(),
        "name": request.body.name,
        "email": request.body.email,
        "message": request.body.message
    }

    async.series([
      function setAuth(step) {
        var creds = require('./drive_credentials.json');
        sheet.useServiceAccountAuth(creds, step);
      },
      function addRow(step) {
        // google provides some query options
        sheet.addRow(1, row, function (error) {
            if (error) {
                console.log("Error adding row! You screwed up!");
            }
            else {
                console.log("Adding row worked!");
            }
        });
      }
    ]);
});


module.exports = router;
