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
    
    $.each(data[0], function(key, post) {
      if (post.message) {
        items.push('<li><span class="tweet_text">' + post.message + '</span></li>');
      }
    });
    var published = items.slice(0,3);
    $('<ul/>', {
      'class': 'tweet_list',
      html: published.join('')
    }).appendTo(".fbook");
    $(".fbook").linkify("*");
  });

});

/* Facebook in the slider */
$.getJSON('http://twitter.supersimple.co/facebook?user=watchmn', function(data) {
  var counter = 1;
  console.log(data[1]);
  /* Process each post */
  $.each(data[0], function(key, post) {
    /* If it has a message, a name, and a picture, we'll use it for slider content */
    if (post.message && post.name && post.picture) {
      if ($("#da-slide" + counter).length) {
        console.log("Step one!", post, counter);
        console.log(post.ss_md5);
        $("#da-slide" + counter + " p").html(post.message);
        $("#da-slide" + counter + " p").linkify("*");
        $("#da-slide" + counter + " .da-img").html("<img src=\"" + post.pic_300_160 + "\" alt=\"" + post.name + "\" />");
        /* Truncate the title */
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
  
  $("#addr_street").html(data[1].location.street);
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