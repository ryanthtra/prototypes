//Create GLOBAL variable below here on line 2
var global_result = null;

$(document).ready(function(){
	$('button').click(function(){
		console.log('click initiated');
		$.ajax({
			dataType: 'json',
			url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
			success: function(result) {
				console.log('AJAX Success function called, with the following result:', result);

				// Feature Set #2
				global_result = result;
				var movie_info = global_result.feed.entry[0];
				global_result = movie_info["im:image"][2]['label'];

				// Feature Set #3
				var movie_entries = result.feed.entry;
				for (var i = 0; i < movie_entries.length; i++)
				{
					var new_image = $('<img>').attr('src', movie_entries[i]["im:image"][2]['label']);

					// Feature Set #4
					var name = $('<p>').text(movie_entries[i]["im:name"]["label"]);
					var director = $('<p>').text('Directed by: ' + movie_entries[i]["im:artist"]["label"]);
					var movie_span = $('<div>').append(new_image, name, director, $('<hr>'));

					$('#main').append(movie_span);
				}
			}
		});
		console.log('End of click function');
	});
});

