// Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay 
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);



//Add overlay
$("body").append($overlay);
  //An image
  //A caption


// Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  console.log(imageLocation);
  
  //update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
    $overlay.show();
  
  //get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);  
});


//When overlay is clicked
$overlay.click(function() {
    //Hide the overlay
 $overlay.hide(); 
});





//SCROLL TO ANCHORS

$(document).ready(function() {
    $("#aboutA").click(function() {
    $('html, body').animate({
      scrollTop: $("#aboutAnchor").offset().top
    }, 1000);
  });
});

$(document).ready(function() {
    $("#homeA").click(function() {
    $('html, body').animate({
      scrollTop: $("#homeAnchor").offset().top
    }, 1000);
  });
});

$(document).ready(function() {
    $("#portA").click(function() {
    $('html, body').animate({
      scrollTop: $("#portAnchor").offset().top
    }, 1000);
  });
});
















