$(document).ready(function(){

  $("body").tooltip({ selector: '[data-toggle=tooltip]', container:'body' });

  $(".right").on("submit", function(e){

    e.preventDefault();

  });

  // Contact Form
  $("#contactForm").on("submit", function(e){

    e.preventDefault();
    $(".right").find("#contactForm").remove();
    $("<div class='newRight'><img class='newLogo' src='Images/Logo2.png'/></div>").prependTo(".right");



  });

  // Top Social Icons
  $(".mainSocial li").on("mouseover", function() {

    $(this).css("opacity", ".5");

  }) .on("mouseout", function(){

    $("li").css("opacity", "1");

  });

  //Arrow Skate News
  $(".content").on("mouseover", function(e){

    if($(window).width() >= 1024){
  // do your stuff
      $(".redArrow").addClass("show");
      $(".redP").text("SKATE NEWS");
    }

    }) .on("mouseout", function(e){

      $(".redArrow").removeClass("show");

    });


  // Arrow Skaters
  $(".images").on("mouseover", function(e){

    if($(window).width() >= 1024){
  // do your stuff
      $(".redArrow").addClass("show");
      $(".redP").text("SKATEBOARDERS");
    }

    }) .on("mouseout", function(e){

      $(".redArrow").removeClass("show");

    });

  // Arrow Boards
  $(".boards").on("mouseover", function(e){

    if($(window).width() >= 1024){
  // do your stuff
      $(".redArrow").addClass("show");
      $(".redP").text("SKATE BOARDS");
    }

    }) .on("mouseout", function(e){

      $(".redArrow").removeClass("show");

    });

});
