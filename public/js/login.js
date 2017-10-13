$(document).on('click','form.Login', function() {
  // Getting references to our form and inputs
  var loginForm = $("form.Login");
  var userNameInput = $("input#userName");
  var passwordInput = $("input#password");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    console.log("clicked submit");
    event.preventDefault();
    var userData = {
      user_name: userNameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.user_name || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.user_name, userData.password);
    userNameInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the admin page
  function loginUser(user_name, password) {
    $.post("/api/login", {
      user_name: user_name,
      password: password
    }).then(function(data) {
      window.location.replace(data);
            // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});