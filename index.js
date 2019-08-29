

$("li").click(function() {
    $('html,body').animate({
        scrollTop: $("#www").offset().top},
        'slow');
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



  
  $("#anchor1").click(function() {
      $('html,body').animate({
          scrollTop: $("#myAnchor").offset().top},
          'slow');
  });
  $("#anchor2").click(function() {
      $('html,body').animate({
          scrollTop: $("#myAnchor2").offset().top},
          'slow');
  });
  $("#anchor3").click(function() {
      $('html,body').animate({
          scrollTop: $("#myAnchor3").offset().top},
          'slow');
  });
  
  