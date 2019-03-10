//

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

var map = L.map('mymap').fitWorld();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.332834, -3.764727]).addTo(map)
  .bindPopup('<a href="https://t3chfest.uc3m.es">T3chfest (U. Carlos III)</a><img src="t3chfest.png" heigth="100%" width="100%">')
  .openPopup();

map.on('click', onMapClick);

function onLocationFound(e) {
  L.marker(e.latlng).addTo(map)
    .bindPopup("Accuracy: " + e.accuracy + " m.").openPopup();

  L.circle(e.latlng, e.accuracy).addTo(map);
}

function onLocationError(e) {
  alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 16});
