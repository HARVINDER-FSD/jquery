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



    $("#hide2").click(function () {
        $("p").hide();
    })
    $("#show2").click(function () {
        $("p").show();
    })

    $("#toggle3").click(function () {
        $("#p2").toggle();
    })
    $("#toggle4").click(function () {
        $(".img2").toggle();
    })
    $("p").click(function(){
        $(this).hide()
    })
   
    
})