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
    var selection = document.querySelector("#formSubmissionOption");
    var reason = selection.options[selection.selectedIndex].value;

    var form_data = {
      "name": name,
      "email": email,
      "message": message,
      "reason": reason
    };

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
        data: JSON.stringify(form_data),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
          toastr.success("Thank you for your submission. We'll contact you as soon as possible.", 'Code The South');
          $("#nameLabel").val('');
          $("#emailLabel").val('');
          $("#msgTextarea").val('');
        },
        error: function(response){
          toastr.error('Uh oh! You did not successfully contact us. ' + response.responseText, 'Code The South');
        }
    });
});
/* Improve scrolling functionality */
var scroll = function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 650, /*TODO: add jQuery.easing 'inOutExpo' */null);
     window.location.hash = hash;
};

$("ul.nav li a").on('click', scroll);
$("a.navbar-brand").on('click', scroll);
