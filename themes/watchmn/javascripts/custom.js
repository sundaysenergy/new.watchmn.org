
/* Twitter */

/* Facebook */
$('#facebook-feed').fbWall({
  id:'watchmn',
  accessToken:'AAACEdEose0cBAJKZBaaTdPCZAZAgBvjIQ5g1VPUs0eSTZBWH3ba3cRgTsZBOtS5smb7attcH4K1xON7kAido81enRx6AdGih9fO4uu9GHdAZDZD',
  showGuestEntries:false,
  showComments:true,
  max:2,
  timeConversion:24
});

/* Twitter #1 */

jQuery(function($){
   $(".tweet").tweet({
      username: "WATCHMN",
      join_text: "auto",
      avatar_size: 0,
      count: 3,
      auto_join_text_default: "we said,",
      auto_join_text_ed: "we",
      auto_join_text_ing: "we were",
      auto_join_text_reply: "we replied to",
      auto_join_text_url: "we were checking out",
      loading_text: "loading tweets...",
      template: "{text}"
   });
}); 

/* Twitter #2 */

jQuery(function($){
   $(".ctweet").tweet({
      username: "WATCHMN",
      join_text: "auto",
      avatar_size: 0,
      count: 1,
      auto_join_text_default: "we said,",
      auto_join_text_ed: "we",
      auto_join_text_ing: "we were",
      auto_join_text_reply: "we replied to",
      auto_join_text_url: "we were checking out",
      loading_text: "loading tweets...",
      template: "{text}"
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