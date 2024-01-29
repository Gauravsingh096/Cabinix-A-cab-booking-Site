let menubar = document.querySelector('#menu-bars')
let mynav = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}
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
}
function submitForm(event) {
  event.preventDefault();

  var pickupLocation = document.getElementById("pickupLocation").value;
  var destination = document.getElementById("destination").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var numPersons = document.getElementById("numPersons").value;

  var formData = {
    pickupLocation: pickupLocation,
    destination: destination,
    date: date,
    time: time,
    numPersons: numPersons
  };


  console.log(formData);
}


function submitForm(event) {
  event.preventDefault();

  var pickupLocation = document.getElementById("pickupLocation").value;
  var destination = document.getElementById("destination").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var numPersons = document.getElementById("numPersons").value;

  var formData = {
      pickupLocation: pickupLocation,
      destination: destination,
      date: date,
      time: time,
      numPersons: numPersons
  };

  // Log the form data to the console
  console.log("Form Data:", formData);

  document.getElementById("output.html").innerText = JSON.stringify(formData, null, 2);

}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById("demo").innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      document.getElementById("demo").innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      document.getElementById("demo").innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      document.getElementById("demo").innerHTML = "An unknown error occurred.";
      break;
  }
}
document.addEventListener('DOMContentLoaded', function () {
  fetch('http://127.0.0.1:8000/cabinix/api/cabinix/cabs/available/')
      .then(response => response.json())
      .then(data => {
          console.log(data);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
});



