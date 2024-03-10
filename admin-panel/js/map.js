	
jQuery(document).ready(function($) {
	

	var map = $('#map').jMap({
		debug: true,
		zoom: 6,
		height: 400,
		markers: [
			{
				lat: 62.10,
				lng: 12.30,
				content: 'Awesome sauce',
				events: {
					click: function( map, marker ) {
						console.log(map);
					},
				}
				
			}
		]
	});

	$('#map').jMap('addMarker', { lat: 61.00, lng: 12.33, content: 'Balooo' });

	setTimeout( function() {
		$('#map').jMap('centerMap');
	}, 1000 );



});