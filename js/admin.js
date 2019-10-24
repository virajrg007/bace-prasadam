$(document).ready(function() {
  $.ajax({
    url: "https://tranquil-stream-91687.herokuapp.com/v1/users",
    type: "get",
    success: function(response) {
      var users = JSON.parse(response).filter((user)=>user.role!="admin");
      var html = "";
      for (var i = 0; i < users.length; i++)
        html +="<tr><td>" +users[i].username +"</td><td>" +users[i].pass +"</td><td>" +users[i].role+"</td></tr>";
      $("#users tr")
        .first()
        .after(html);
    },
    error: function(xhr) {
      alert("login unsuccessful!!");
    }
  });
});
