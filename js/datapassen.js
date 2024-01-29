console.log("Script loaded!");

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
      pickupLocation: document.getElementById('pickupLocation').value,
      destination: document.getElementById('destination').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      numPersons: document.getElementById('numPersons').value,
      vehicleType: document.getElementById('vehicleType').value
    };

    // Save the data to a local JSON file
    saveBookingData(formData);
  }

  function saveBookingData(formData) {
    // Retrieve existing booking count from localStorage or initialize to 0
    let bookingCount = parseInt(localStorage.getItem('bookingCount')) || 0;

    // Increment booking count for the next booking
    bookingCount++;

    // Generate the file name for the JSON file
    const fileName = `booking${bookingCount}.json`;

    // Update the booking count in localStorage
    localStorage.setItem('bookingCount', bookingCount);

    // Create a Blob containing the JSON data
    const blob = new Blob([JSON.stringify(formData)], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.innerText = 'Download Booking Data'; // Optionally, provide a visible link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
