
// Ensure JavaScript is working

console.log("Working");

// Create a map with a center and zoom level

let map = L.map('mapid').setView([37.6214, -122.3790], 5);

// Create tile layer

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Add tile layer

streets.addTo(map);

let JFK = [40.64129, -73.77805];
let AUS = [30.19738, -97.66640];
let LB = [33.81597, -118.15131];
let YYZ = [43.67767, -79.62480];

// Coordinates for each point to be used in the polyline.
let line = [
    JFK,
    AUS,
    LB,
    YYZ
];


// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "blue",
    dashArray: "20, 20",
    weight: 4,
    opacity: 0.5
}).addTo(map);


