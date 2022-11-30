
// Ensure JavaScript is working

console.log("Working");




// Create tile layer

let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create maps variable
let baseMaps = {
    "Day Navigation": light,
    "Night Navigation": dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [dark]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/kwinterling/Mapping_Earthquakes/main/static/data/majorAirports.json";

// Getting connection reset error
let airportData = "static/data/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/torontoRoutes.json";

let torontoData = "static/data/torontoRoutes.json";

/* d3.json(airportData).then(function (data) {
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
*/

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    color: "#ffffa1",
    weight: 2,
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`<h3>Airline: ${feature.properties.airline}</h3> <hr /> <h3>Destination: ${feature.properties.dst}</h3>`);
    }
  }).addTo(map);
});


