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
    

    if (reason === "contact") {

    }
    else if (reason === "idea") {

    }
});
