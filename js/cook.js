$(document).ready(function() {
    $.ajax({
        url: "https://tranquil-stream-91687.herokuapp.com/v1/count",
        type: "get",
        success: function(response) {
          var count = JSON.parse(response);
          console.log(count)
          $("#breakfast").text(parseInt(count['breakfast']))
          $("#lunch").text(parseInt(count['lunch']))
          $("#dinner").text(parseInt(count['dinner']))
        },
        error: function(xhr) {
          alert("login unsuccessful!!");
        }
      });
  });
  