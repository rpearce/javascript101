//===========================================//
//========  CHS CODECAMP GLOBAL JS  =========//
//===========================================//

// ===================
// slide functionality
// ===================

$.deck('.slide');


// ============================
// updates video on link clicks
// ============================

var url = window.location.href;

if ( url.indexOf('screencasts') > -1 ) {
	$('.video_link').click(function(){
		var data_src = $(this).data('src');
		$('.active_video').removeClass('active_video');
		$(this).addClass('active_video');
		$('.video_iframe').attr('src', data_src);
	});
}


// =================================
// updates assignment on link clicks
// =================================

if ( url.indexOf('assignments') > -1 ) {
	$('.assignment').click(function(){
		$('.active_assignment_link').removeClass('active_assignment_link');
		$(this).addClass('active_assignment_link');
		link_index = $(this).data('index');
		$('.assignment_text').each(function(){
			var content_index = $(this).data('index');
			if(content_index == link_index) {
				$('.active_assignment').removeClass('active_assignment');
				$(this).addClass('active_assignment');
			}
		});
	});
}