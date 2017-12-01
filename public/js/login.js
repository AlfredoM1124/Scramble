$(function() {
    $("#login-form").on("submit", function(event) {
        event.preventDefault();
        var login = {
            username: $("#username").val().trim(),
            password: $("#password").val().trim()
        }
        console.log(login);
        //sending the login information into the api controller to evaluate the result
        $.ajax("/login/", {
            type: "POST",
            data: login
        }).then(function(data) {
            console.log("data_coming " + data);

            console.log("user have been evaluated");
        })
    })
});