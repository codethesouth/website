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
    
    if (reason === "contact") {
        url += "1RIAFV6J5vlk09EF99FdLPOZz2-r7XckysxOQzNiROH4";
    }
    else if (reason === "idea") {
        url += "1A4TN19l02WkhE16nKwdy0aKkJUhn-aKpALS9ymHUXp0";
    }
    
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
