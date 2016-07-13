var express = require("express");
var async = require("async");
var GoogleSpreadsheet = require("google-spreadsheet");
var router = express.Router();

router.get("/", function (request, response) {
    response.render("index", { title: "CodeTheSouth" });
});

router.post("/spreadsheets/:id/sync", function (request, response, next) {
    var id = request.params.id;

    var sheet = new GoogleSpreadsheet(id);
    var row = {
        "timestamp": new Date().getTime(),
        "name": "John Doe",
        "email": "john@doe.com",
        "message": "It worked!"
    }

    async.series([
        function authenticate(step) {

            // We must first authenticate against Google Drive before uploading the data.
            var credentials = require('./drive_credentials.json');

            // We are using a Service Account to handle the authentication.
            sheet.useServiceAccountAuth( credentials, step);
        },

        function sendDataToGoogle(step) {

            // Start setting the data to Google Drive
            sheet.addRow(1, row, function (error) {
                if (error) {
                    console.log("Sorry, but the data has failed to upload to Google Drive.\n");
                    console.info(error);
                }
                else {
                    console.log("Congratulations, the data was successfully uploaded to Google Drive.\n");
                }
            });
        }
    ]);
});

module.exports = router;