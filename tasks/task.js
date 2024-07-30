$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide();
    })
    $("#show").click(function () {
        $("p").show();
    })

    $("#toggle").click(function () {
        $("#p1").toggle();
    })
    $("#toggle2").click(function () {
        $(".img1").toggle();
    })

})