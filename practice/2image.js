
$(document).ready(function () {
    $("#but").click(function () {
      $(".album1").animate({
        top: "0",
        left: "0",
       
      },2000);
      $(".album2").animate({
        top: "0px",
        left: "200px",
      },2000);
      $(".album3").animate({
        top: "0px",
        left: "400px",
      },2000);
      $(".album4").animate({
        top: "0px",
        left: "600px",
      },2000);
      $(".album5").animate({
        top: "0px",
        left: "800px",
      },2000);
      $(".album6").animate({
        top: "0px",
        left: "1000px",
      },2000);
      $(".album7").animate({
        top: "0px",
        left: "1200px",
      },2000);
      $(".album8").animate({
        top: "0px",
        left: "1400px",
      },2000);
      $(".album9").animate({
        top: "0",
        left: "0",
      },3000);
      $(".album10").animate({
        top: "0px",
        left: "200px",
      },3000);
      $(".album11").animate({
        top: "0px",
        left: "400px",
      },3000);
      $(".album12").animate({
        top: "0px",
        left: "600px",
      },3000);
      $(".album13").animate({
        top: "0px",
        left: "800px",
      },3000);
      $(".album14").animate({
        top: "0px",
        left: "1000px",
      },3000);
      $(".album15").animate({
        top: "0px",
        left: "1200px",
      },3000);
      $(".album16").animate({
        top: "0px",
        left: "1400px",
      },3000);
    });
    $("#left").click(function(){
     $(".container").animate({
      top:"0",
      left:"500px"
     },2000)
    })
    $("#right").click(function(){
      $(".container").animate({
       top:"0",
       right:"500px"
      },2000)
     })
     $("#reset").click(function(){
      $(".container").animate({
       top:"0",
       left:"0"

      })
     })
  });

