
/* Twitter */

/* Facebook */
$('#facebook-feed').fbWall({
  id:'watchmn',
  accessToken:'AAAC7gAoWDQ0BABXU7HrwopzOA8dN8mVqusF2GiyE1jfqjYP0DdhZA0ohzmi777Lccn38l1wHqHkOWYSHb0ZBMZAGZA6NyJr7of94yAWKXgZDZD',
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