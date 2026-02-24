// // 1) Initialize map
// var map = L.map('map').setView([28.6139, 77.2090], 13);

// // 2) Add OpenStreetMap tiles
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; OpenStreetMap contributors'
// }).addTo(map);

// // 3) OpenRouteService API key
// const apiKey = "YOUR_OPENROUTESERVICE_API_KEY";

// // 4) Example Route (Delhi to New Delhi)
// function route() {
//   const start = [28.6139, 77.2090];
//   const end = [28.7041, 77.1025];

//   fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start[1]},${start[0]}&end=${end[1]},${end[0]}`)
//     .then(res => res.json())
//     .then(data => {
//       const coords = data.features[0].geometry.coordinates;
//       const latlngs = coords.map(c => [c[1], c[0]]);
//       L.polyline(latlngs, { weight: 4 }).addTo(map);
//     });
// }

// route();


// Your listing coordinates
// Mapbox uses [lng, lat] format
// Leaflet uses [lat, lng] format
// const coords = listing.geometry.coordinates; // [lng, lat]

// const lat = coords[1];
// const lng = coords[0];

// // Initialize map
// const map = L.map('map').setView([lat, lng], 12);

// // Add OpenStreetMap tiles (satellite-like style not free in OSM, but this is best free option)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; OpenStreetMap contributors'
// }).addTo(map);

// // Add marker
// const marker = L.marker([lat, lng]).addTo(map);

// // Add popup
// marker.bindPopup(`
//   <h4>${listing.title}</h4>
//   <p>Exact Location provided after Booking</p>
// `).openPopup();
