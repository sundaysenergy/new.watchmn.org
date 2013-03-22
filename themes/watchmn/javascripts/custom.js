/* Facebook */
$('#facebook-feed').fbWall({
  id:'watchmn',
  accessToken:'AAACEdEose0cBAJKZBaaTdPCZAZAgBvjIQ5g1VPUs0eSTZBWH3ba3cRgTsZBOtS5smb7attcH4K1xON7kAido81enRx6AdGih9fO4uu9GHdAZDZD',
  showGuestEntries:false,
  showComments:true,
  max:2,
  timeConversion:24
});

/* Twitter */
$(document).ready(function() {
  $.getJSON('http://twitter.supersimple.co/?user=watchmn&tweets=4', function(data) {
    var items = [];
   
    $.each(data, function(key, post) {
      items.push('<li><span class="tweet_text">' + post.text + '</span></li>');
    });
   
    $('<ul/>', {
      'class': 'tweet_list',
      html: items.join('')
    }).appendTo(".tweet");
  });

});

$.getJSON('http://twitter.supersimple.co/facebook?user=watchmn', function(data) {
  var counter = 1;
  
  $.each(data, function(key, post) {
    console.log(post)
    if (post.message && post.description && post.picture) {
      if ($("#da-slide" + counter) != 0) {
        $("#da-slide" + counter + " p").html(post.description);
        $("#da-slide" + counter + " .da-img").html("<img src=\"" + post.picture + "\" alt=\"" + post.message + "\" />");
        $("#da-slide" + counter + " h2").html(post.message);
      }
    }
    counter++;
  });

});

/* Support list */

$("#slist a").click(function(e){
   e.preventDefault();
   $(this).next('p').toggle(200);
});

/* Portfolio */

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});


jQuery("a[class^='prettyPhoto']").prettyPhoto({
overlay_gallery: false, social_tools: false
});