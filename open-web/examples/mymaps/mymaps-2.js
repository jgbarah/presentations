//

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

var map = L.map('mymap').setView([40.332834, -3.764727], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.332834, -3.764727]).addTo(map)
  .bindPopup('<a href="https://t3chfest.uc3m.es">T3chfest (U. Carlos III)</a><img src="t3chfest.png" heigth="100%" width="100%">')
  .openPopup();

map.on('click', onMapClick);

