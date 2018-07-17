$(document).ready(function(){
function hideTheThing() {
	if ($('li p').is(':visible')){
		$('li').removeAttr('class').children('p').slideUp(500).siblings('p.topLink').remove();
	}
}
hideTheThing();

$('li h3').on('click', function(e){
		
		hideTheThing();
		
		$(this).parent('li').addClass('selectQ').append('<p class="topLink"><a href="#">&uArr; Return to Top</a></p>').children('p').slideDown(1000, function(){
			$(window).scrollTo($(this).parent('li'), 1000); 			
		});
		e.preventDefault();
	});
$('li').on('click', 'p.topLink a', function(e){
		$(window).scrollTo(0, 1000);
		hideTheThing();
		e.preventDefault();
	});

});