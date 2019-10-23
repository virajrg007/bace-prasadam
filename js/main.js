$(document).ready(function() {
  $("#login-btn").click(function() {
    $.ajax({
      url: "https://tranquil-stream-91687.herokuapp.com/v1/login",
      type: "get", //send it through get method
      data: {
        username: $("#username").val(),
        pass: $("#pass").val()
      },
      success: function(response) {
        localStorage.setItem("username", response);
        setTimeout(()=>window.location.replace("./home.html"), 2000);
      },
      error: function(xhr) {
        alert("login unsuccessful!!");
      }
    });
  });
});
