$(document).ready(function() {
  var user = JSON.parse(localStorage.getItem("username"));
  console.log(user);
  $("#name").text(user.username);
  for(i in user.count) {
    if(user.count[i]==0)
      $("[name="+i+"]").parent().removeClass("active");
    else
      $("[name="+i+"]").parent().addClass("active");
  }
  $(".cb-value").click(function() {
    var mainParent = $(this).parent(".toggle-btn");
    var mealNo = $(this).attr("name");
    if ($(mainParent).find("input.cb-value").is(":checked")) var mealStatus = 0;
    else var mealStatus = 1;
    $.ajax({
      url: "https://tranquil-stream-91687.herokuapp.com/v1/meal",
      type: "get",
      data: {
        username: user.username,
        mealNo: mealNo,
        mealStatus: mealStatus
      },
      success: function(response) {
        if (mealStatus==1) {
          $(mainParent).addClass("active");
        } else {
          $(mainParent).removeClass("active");
        }
      },
      error: function(xhr) {
        alert("login unsuccessful!!");
      }
    });
    
    console.log(mealNo, mealStatus);
  });

  //   $("#login-btn").click(function() {
  //     $.ajax({
  //       url: "https://tranquil-stream-91687.herokuapp.com/v1/login",
  //       type: "get", //send it through get method
  //       data: {
  //         username: $("#username").val(),
  //         pass: $("#pass").val()
  //       },
  //       success: function(response) {
  //         localStorage.setItem("username", response);
  //         setTimeout(()=>window.location.replace("./home.html"), 2000);
  //       },
  //       error: function(xhr) {
  //         alert("login unsuccessful!!");
  //       }
  //     });
  //   });
});
