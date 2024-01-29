function bookTaxi() {
    var pickupLocation = document.getElementById('pickupLocation').value;
    var destination = document.getElementById('destination').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var numPersons = document.getElementById('numPersons').value;
    var confirmationMessage = `
      Pickup Location: ${pickupLocation}
      Destination: ${destination}
      Date: ${date}
      Time: ${time}
      Number of Persons: ${numPersons}
    `;
    alert('Taxi booked!\n\n' + confirmationMessage);
    var pickupAddress = document.getElementById('pickupLocation').value;
    var destinationAddress = document.getElementById('destination').value;

    showUserLocations(pickupAddress, destinationAddress);
    submitForm();
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    alert("Latitude: " + latitude + "\nLongitude: " + longitude);

}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
var accessToken = 'pk.3e37c03d9d17251e95d226a159a9b8f1';

var map = L.map('map').setView([0, 0], 2); // Center the map at (0, 0) with zoom level 2
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to show user-entered locations on the map
function showUserLocations(pickupAddress, destinationAddress) {
var pickupUrl = `https://us1.locationiq.com/v1/search.php?key=${accessToken}&q=${encodeURIComponent(
pickupAddress
)}&format=json`;

var destinationUrl = `https://us1.locationiq.com/v1/search.php?key=${accessToken}&q=${encodeURIComponent(
destinationAddress
)}&format=json`;

// Geocode pickup location
fetch(pickupUrl)
.then(response => response.json())
.then(data => {
  var pickupLocation = data[0];
  var pickupLat = pickupLocation.lat;
  var pickupLon = pickupLocation.lon;

  // Add a marker for pickup location
  L.marker([pickupLat, pickupLon])
    .addTo(map)
    .bindPopup(`Pickup Location: ${pickupAddress}`)
    .openPopup();
})
.catch(error => console.error('Error geocoding pickup location:', error));

// Geocode destination location
fetch(destinationUrl)
.then(response => response.json())
.then(data => {
  var destinationLocation = data[0];
  var destinationLat = destinationLocation.lat;
  var destinationLon = destinationLocation.lon;

  // Add a marker for destination location
  L.marker([destinationLat, destinationLon])
    .addTo(map)
    .bindPopup(`Destination: ${destinationAddress}`)
    .openPopup();

  // Fit the map to include both markers
  var bounds = L.latLngBounds([
    [pickupLat, pickupLon],
    [destinationLat, destinationLon]
  ]);
  map.fitBounds(bounds);
})
.catch(error => console.error('Error geocoding destination location:', error));
}
// const firebaseConfig = {
//     apiKey: "AIzaSyAne_5yqDgav8ME45UpMWgbhUTTel_ZUBk",
//     authDomain: "a-cab-booking-site.firebaseapp.com",
//     databaseURL: "https://a-cab-booking-site-default-rtdb.firebaseio.com",
//     projectId: "a-cab-booking-site",
//     storageBucket: "a-cab-booking-site.appspot.com",
//     messagingSenderId: "461329956746",
//     appId: "1:461329956746:web:a529820679a2428173d273"
//   };
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// function submitForm(event) {
//     event.preventDefault(); 
//     const formData = {
//         pickupLocation: document.getElementById('pickupLocation').value,
//         destination: document.getElementById('destination').value,
//         date: document.getElementById('date').value,
//         time: document.getElementById('time').value,
//         numPersons: document.getElementById('numPersons').value,
//         vehicleType: document.getElementById('vehicleType').value
//       };
//     db.collection("taxiBookings").add(formData)
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//         alert("Taxi booked successfully!");
//         })
//       .catch((error) => {
//         console.error("Error adding document: ", error);
//         alert("Failed to book taxi. Please try again.");
//       });
//   }
function submitForm(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way
  
    // Call the function to calculate the total cost
    calculateTotalCost();
  
    // Display the total cost div
    // document.getElementById("totalCostDiv").style.display = "block";
  }
  function calculateTotalCost() {
    var pickupLocation = document.getElementById("pickupLocation").value;
    var destination = document.getElementById("destination").value;
    var vehicleType = document.getElementById("vehicleType").value;
    var numPersons = document.getElementById("numPersons").value;

    getCoordinates(pickupLocation, destination, function (pickupCoords, destCoords) {
        var distanceInKilometers = calculateDistance(pickupCoords, destCoords);
        var fare = calculateFare(vehicleType, distanceInKilometers, numPersons);

        // Update the totalCost paragraph
        document.getElementById("totalCost").innerHTML = "Total Cost: $" + fare.toFixed(2);

        // Display the total cost div
        document.getElementById("totalCostDiv").style.display = "block";

        // Optionally, you can update the hidden input field with the calculated distance
        document.getElementById("distance").value = distanceInKilometers;
      });
    }

  function getCoordinates(address, callback) {
    // Replace this with your actual geocoding logic or use a geocoding service
    // Example: Assume a hypothetical geocoding function called geocodeAddress
    function geocodeAddress(address, callback) {
      // Your geocoding logic here (returning the coordinates)
      // Replace the following line with your actual geocoding logic.
      var coordinates = { latitude: 12.9714, longitude: 77.5946 }; // Bangalore, India (example)
      callback(coordinates);
    }

    geocodeAddress(address, callback);
  }

  function calculateDistance(coord1, coord2) {
    var earthRadius = 6371; // Radius of the Earth in kilometers

    var lat1 = toRadians(coord1.latitude);
    var lon1 = toRadians(coord1.longitude);
    var lat2 = toRadians(coord2.latitude);
    var lon2 = toRadians(coord2.longitude);

    var dLat = lat2 - lat1;
    var dLon = lon2 - lon1;

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var distance = earthRadius * c; // Distance in kilometers
    return distance;
  }

  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  function calculateFare(vehicleType, distance, numPersons) {
    var baseFares = {
        'auto': 5.0,
        'car': 10.0,
        'bike': 8.0
      };

      var costPerKilometer = 2.0; // Adjust this according to your pricing structure
      var costPerPerson = 1.0; // Adjust this according to your pricing structure

      // Calculate the fare based on the selected vehicle type, distance, and number of persons
      var baseFare = baseFares[vehicleType] || 0.0;
      var distanceCost = costPerKilometer * distance;
      var personsCost = costPerPerson * numPersons;

      var totalFare = baseFare + distanceCost + personsCost;
      return totalFare;
    // Replace this with your actual pricing logic
    // Example: Assume a hypothetical pricing function called calculateBaseFare
    function calculateBaseFare(vehicleType) {
      // Replace the following line with your actual base fare logic.
      var baseFare = 5.0; // Adjust this according to your pricing structure
      return baseFare;
    }

    var baseFare = calculateBaseFare(vehicleType);
    var costPerKilometer = 2.0; // Adjust this according to your pricing structure

    var fare = baseFare + (costPerKilometer * distance);
    return fare;
  }

//   function calculateTotalCost() {
//     // Get values from the form
//     var numPersons = document.getElementById("numPersons").value;
//     var vehicleType = document.getElementById("vehicleType").value;
  
//     // Calculate total cost based on your logic
//     var totalCost = numPersons * getCostPerPerson(vehicleType);
  
//     // Update the totalCost paragraph
//     document.getElementById("totalCost").innerHTML = "Total Cost: $" + totalCost.toFixed(2);
//   }
    
//   function getCostPerPerson(vehicleType) {
//     // Define cost per person for each vehicle type
//     switch (vehicleType) {
//       case "auto":
//         return 10.0; // Replace this with your actual cost for Auto Rickshaw
//       case "car":
//         return 20.0; // Replace this with your actual cost for Mini Car
//       case "bike":
//         return 15.0; // Replace this with your actual cost for Prime Sedan
//       default:
//         return 0.0; // Default cost if the vehicle type is not recognized
//     }
//   }
  

