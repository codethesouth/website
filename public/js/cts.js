
var postToGoogle = function(idea, email) {
  $.ajax({
	url: "https://docs.google.com/forms/d/1X24unZF2IvHZOiJZxR0jDDjUnCcnzgqQvl2i9nSPZnk/formResponse",
  data: { "entry.1145937321": idea, "entry.1860093231": email },
	type: "POST",
	dataType: "xml",
	statusCode: {
		0: function () {
			console.log("google form return status = 0");
		},
		200: function () {
			console.log("google form return status = 200");
		}
	}
  });
};

$(document).ready(function(){
  $("#contact-us-button").click(function() {
  	if ($('#inputEmail').val()) {
        postToGoogle($('#inputMessage').val(), $('#inputEmail').val());
        $('#email-form-group').removeClass('has-error');
        $('#input-form').addClass('has-success');
        $('#inputEmail').val("");
        $('#inputMessage').val("");
      } else {
  	  $('#email-form-group').addClass('has-error');
      $('#input-form').removeClass('has-success');
  	}
  });

  var about1Loaded = false;
  var about2Loaded = false;
  var height1 = 0;
  var height2 = 0;

  $('#about-row-1').load(function()
    {
      about1Loaded = true;
      height1 = $('#about-row-1').height();
      if (about2Loaded)
        {
        if (height1 > height2) {
          $('#about-row-2').height(height1);
          }
        else {
          $('#about-row-1').height(height2);
          }
        }
    });

    $('#about-row-2').load(function()
      {
        about2Loaded = true;
        height2 = $('#about-row-2').height();
        if (about1Loaded)
          {
          if (height1 > height2) {
            $('#about-row-2').height(height1);
            }
          else {
            $('#about-row-1').height(height2);
            }
          }
      });
});
