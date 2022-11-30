
// Ensure JavaScript is working

console.log("Working");




// Create tile layer

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Create maps variable
let baseMaps = {
    "Satellite Streets": satelliteStreets,
    "Streets": streets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/torontoNeighborhoods.json";

let torontoHoods = "static/data/torontoNeighborhoods.json";

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

d3.json(torontoHoods).then(function (data) {
    console.log(data);

    L.geoJSON(data, {
        color: "blue",
        fillColor: "yellow",
        weight: 1,
        onEachFeature: function (feature, layer) {
            console.log(layer);
            layer.bindPopup(`<h3>Neighborhood: ${feature.properties["AREA_NAME"]} (${feature.properties["AREA_S_CD"]})</h3>`);
        }
    }).addTo(map);
});

