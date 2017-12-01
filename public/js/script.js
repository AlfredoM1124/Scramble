$(document).ready(() => {
    $(".button-collapse").sideNav();
    $("#login").webuiPopover({
        url: "#login-form"
    });
    $("#register").modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 0.5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: "4%", // Starting top style attribute
        endingTop: "20%" // Ending top style attribute
    });
    $("#reset").modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 0.5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: "4%", // Starting top style attribute
        endingTop: "20%" // Ending top style attribute
    });
});