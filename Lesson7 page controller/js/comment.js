$(document).ready(function() {
	jQuery('#comment_form').submit(function(event) {
		event.preventDefault();
		jQuery.ajax ({
			type: 'post',
			url: 'php/app/add_comments.php',
			data: {tst: 'tst'},
			success: function(resp) {
				console.log(resp);
			},
			error: function(resp) {
				console.log(resp);			
			}
		});
	});
});