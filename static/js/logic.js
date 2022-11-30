
// Ensure JavaScript is working

console.log("Working");

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);


// Create tile layer

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Add tile layer

streets.addTo(map);

// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/kwinterling/Mapping_Earthquakes/main/static/data/majorAirports.json";

// Getting connection reset error
let airportData = "static/data/majorAirports.json";

// Grabbing our GeoJSON data.
/* d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
*/

d3.json(airportData).then(function (data) {
    console.log(data);

    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            console.log(feature);
            return L.marker(latlng);
        },
        onEachFeature: function (feature, layer) {
            console.log(layer);
            layer.bindPopup(`<b>Airport Code: ${feature.properties.faa}</b> <hr /> <b>Airport Name: ${feature.properties.name}</b>`);
        }
    }).addTo(map);
});

