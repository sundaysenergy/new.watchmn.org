/* Facebook */
$('#facebook-feed').fbWall({
  id:'watchmn',
  accessToken:'AAACEdEose0cBAJKZBaaTdPCZAZAgBvjIQ5g1VPUs0eSTZBWH3ba3cRgTsZBOtS5smb7attcH4K1xON7kAido81enRx6AdGih9fO4uu9GHdAZDZD',
  showGuestEntries:false,
  showComments:true,
  max:2,
  timeConversion:24
});

/* Social media widgets */
$(document).ready(function() {
  /* Twitter */
  $.getJSON('http://twitter.supersimple.co/?user=watchmn&tweets=4', function(data) {
    var items = [];
   
    $.each(data, function(key, post) {
      items.push('<li><span class="tweet_text">' + post.text + '</span></li>');
    });
   
    $('<ul/>', {
      'class': 'tweet_list',
      html: items.join('')
    }).appendTo(".tweet");
    $(".tweet").linkify("*");
  });

  /* Facebook */
  $.getJSON('http://twitter.supersimple.co/facebook?user=watchmn', function(data) {
    var items = [];
    
    $.each(data.slice(0,3), function(key, post) {
      if (post.message) {
        items.push('<li><span class="tweet_text">' + post.message + '</span></li>');
      }
    });
   
    $('<ul/>', {
      'class': 'tweet_list',
      html: items.join('')
    }).appendTo(".fbook");
    $(".fbook").linkify("*");
  });

});

/* Facebook in the slider */
$.getJSON('http://twitter.supersimple.co/facebook?user=watchmn', function(data) {
  var counter = 1;
  
  $.each(data, function(key, post) {
    //console.log(post)
    if (post.message && post.name && post.picture) {
      if ($("#da-slide" + counter).length) {
        console.log("Step one!", post, counter);
        $("#da-slide" + counter + " p").html(post.message);
        $("#da-slide" + counter + " p").linkify("*");
        $("#da-slide" + counter + " .da-img").html("<img src=\"" + post.picture + "\" alt=\"" + post.name + "\" />");
        if (post.name.length > 70) {
          var new_title = post.name.substring(0,70);
          post.name = new_title + "...";
        }
        $("#da-slide" + counter + " h2").html(post.name);
        $("#da-slide" + counter + " .da-link").attr("href", post.link);
        counter++;
      }
    }
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