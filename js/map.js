//map frame
var map = L.map('map',{
  minZoom: 6,
  maxZoom: 18,
  }).setView([51.266, -1.09], 6);
  
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  
L.marker([51.266, -1.09]).addTo(map)
    .bindPopup('Im living here.');