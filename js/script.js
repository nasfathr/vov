var $ = require('jquery');
jQuery = $;
var bootstrap = require('bootstrap');

$(document).ready(function () {
// /*
// 	Smooth scroll functionality for anchor links (animates the scroll
// 	rather than a sudden jump in the page)
// */
// $('.js-anchor-link').click(function(e){
//   e.preventDefault();
//   var target = $($(this).attr('href'));
//   if(target.length){
//     var scrollTo = target.offset().top;
//     $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
//   }
// });


	$('.signup-btn').on('click',function(){
		window.location = '/login?role=' + $(this).data('usertype');
	});
});
