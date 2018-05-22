$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
        //checks for hash to prevent default behavior
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        //jQuery method
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hashtag thing
          window.location.hash = hash;
        });
      }
    });
  });