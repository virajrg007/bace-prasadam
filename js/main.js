$(document).ready(function() {
  $("p").click(function() {
    $(this).hide();
  });
  $("#login-btn").click(function() {
    $.ajax({
        url: "https://tranquil-stream-91687.herokuapp.com/v1/login",
        type: "get", //send it through get method
        data: { 
          username:$("#username").val(),
          pass:$("#pass").val()
        },
        success: function(response) {
          console.log("login successful!!");
          window.location.replace("./home.html");
        },
        error: function(xhr) {
          alert("login unsuccessful!!")
        }
      });
  });
});
