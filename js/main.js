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
        var user = JSON.parse(response);
        console.log(user);
        // if(user.role=='devotee')
        //   setTimeout(()=>window.location.replace("./home.html"), 2000);
        // else if(user.role=='cook')
        //   setTimeout(()=>window.location.replace("./cook.html"), 2000);
        // else
        //   setTimeout(()=>window.location.replace("./admin.html"), 2000);
      },
      error: function(xhr) {
        alert("login unsuccessful!!");
      }
    });
  });
});
