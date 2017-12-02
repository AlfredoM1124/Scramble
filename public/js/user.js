$(function() {
    $("#user_creator").on("submit", function(event) {
        event.preventDefault();
        var new_user = {
            full_name: $("#full_name").val().trim(),
            username: $("#user-name").val().trim(),
            email: $("#email").val().trim(),
            bio: $("#biography").val().trim(),
            picture: $("#picture_file").val().trim(),
            password: $("#password").val().trim()
        }
        console.log(new_user);
        // Here im sending the information inside the database
        $.ajax("/api-user-create", {
            type: 'POST',
            data: new_user
        }).then(function() {
            window.location.href = "/";
            console.log("new User have been created");
            // location.reload();
        })
    });








})



// $("#create-burger").on("submit", function(event) {
//     event.preventDefault();
//     var burger = {
//         burger_name: $("#burger-name").val().trim(),
//         devoured: 0
//     };
//     console.log(burger);
//     // Send the Post to populate inside the Database
//     $.ajax("/api/burger", {
//         type: "POST",
//         data: burger
//     }).then(function() {
//         console.log("new Burger Created");
//         location.reload();
//     })
// });