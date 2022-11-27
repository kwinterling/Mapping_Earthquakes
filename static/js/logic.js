
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


// Load city data
let cityData = cities;

// Log city names and add markers

cityData.forEach(function (city) {
    console.log(city);
    L.circleMarker(city["location"], {
        radius: city["population"]/200000,
        lineweight: 4,
        color: "#ffffa1",
        fillColor: "#ffffa1"
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString("en-US") + "</h3>")
    .addTo(map);
});

