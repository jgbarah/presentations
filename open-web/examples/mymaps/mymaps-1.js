//

var map = L.map('mymap').setView([40.332834, -3.764727], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">' +
               'OpenStreetMap</a> contributors'
}).addTo(map);
