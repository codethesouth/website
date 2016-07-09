/*
 *  Documentation
 *  https://developers.google.com/sheets/guides/migration#add_a_new_row_of_data
 *  API Key: AIzaSyBSHBj2OKvpPnwXyKC5AS6Il2mBVV-YXgU
 */

var form = document.querySelector("#contactForm");

form.addEventListener("submit", function (event) {
    // Prevent the page from reloading when the form is submitted
    event.preventDefault();

    var name = document.querySelector("#nameLabel").value;
    var email = document.querySelector("#emailLabel").value;
    var message = document.querySelector("#msgTextarea").value;
    var reason = document.querySelector("#formSubmissionOption > option").value;
    var url = "/spreadsheets/";
    
    url += "1JIuyTrAuHZZ4hnhN62tkQZs5TjkX0aV5f7oEPg9mn40";
    /*
    if (reason === "contact") {
        url += "1JIuyTrAuHZZ4hnhN62tkQZs5TjkX0aV5f7oEPg9mn40";
    }
    else if (reason === "idea") {
        url += "1rN5G10gRdQwsu4c4m2AtU-vvrIzSmup1RJnaCpzsYAs";
    }
     
    */
    
    url += "/sync";

    $.ajax(url, {
        method: "POST",
        headers: {},
        success: function (response) {
            console.info("Request succeeded!");
        },
        error: function (response) {
            console.error("Request failed!");
        }
    });
});
