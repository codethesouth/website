var express = require("express");
var async = require("async");
var GoogleSpreadsheet = require("google-spreadsheet");
var router = express.Router();
var async = require('async');

router.get("/", function (request, response) {
    response.render("index", { title: "CodeTheSouth" });
});

router.post("/spreadsheets/:id/sync", function (request, response, next) {
    var id = request.params.id;
    var sheet = new GoogleSpreadsheet(id);
    var row = {
        "timestamp": new Date().getTime(),
        "name": request.body.name,
        "email": request.body.email,
        "message": request.body.message
    }

    if (row.name == null || row.name == '')
        {
        response.status(400).jsonp({reason: "You must enter a name"});
        return next();
        }

    if (row.email == null || row.email == '' || !validateEmail(row.email))
        {
        response.status(400).jsonp({reason: "You must enter a valid Email."});
        return next();
        }


    async.series([
        function authenticate(step) {

            // We must first authenticate against Google Drive before uploading the data.
            var credentials = require('../drive_credentials.json');

            // We are using a Service Account to handle the authentication.
            sheet.useServiceAccountAuth( credentials, step);
        },

        function sendDataToGoogle(step) {

            // Start setting the data to Google Drive
            sheet.addRow(1, row, function (error) {
                if (error) {
                  console.log("error");
                  response.status(500).jsonp({reason: "The form submission failed. Please try again."});
                  return next();
                }
                else {
                  response.status(200).jsonp({reason: "Success!"});
                  return next();
                }
            });
        },
    ]);
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

module.exports = router;
