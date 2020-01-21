function initMap() {
  var map;
  var location = { lat: 41.333071, lng: 69.428415 };
  var bounds = new google.maps.LatLngBounds(location);
  var mapOptions = {
    center: new google.maps.LatLng(location),
    zoom: 3
  };

  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  map.setTilt(45);

  var markers = [
    ["Завод", 41.333071, 69.428415],
    ["Офис", 41.323763, 69.22155]
  ];

  //setting markers on map
  for (i = 0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(location);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      zoom: 3,
      title: markers[i][0]
    });
    // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);
  }

  var boundsListener = google.maps.event.addListener(
    map,
    "bounds_changed",
    function(event) {
      this.setZoom(12);
      google.maps.event.removeListener(boundsListener);
    }
  );
}
