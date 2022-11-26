
// Ensure JavaScript is working

console.log("Working");

// Create a map with a center and zoom level

let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create tile layer

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Add tile layer

streets.addTo(map);

// Add a map marker for Los Angeles, CA

let marker = L.marker([34.0522, -118.2437]).addTo(map);

let circle1 = L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);


