//

const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">'
  + 'OpenStreetMap</a> contributors';

var map = L.map('mymap').setView([40.332834, -3.764727], 15);

function onMapClick(e) {
  L.popup()
    .setLatLng(e.latlng)
    .setContent(e.latlng.toString())
    .openOn(map);
}

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {attribution: ATTRIBUTION})
  .addTo(map);

map.on('click', onMapClick);

