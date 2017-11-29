$(function() {
    $("#login-form").on("submit", function(event) {
        event.preventDefault();
        var login = {
            username: $("#username").val().trim(),
            password: $("#password").val().trim()
        }
        console.log(login);
        //sending the login information into the api controller to evaluate the result
        $.ajax("/login/api-user-login", {
            type: "POST",
            data: login
        }).then(function() {
            console.log("user have been evaluated");
        })
    })
});