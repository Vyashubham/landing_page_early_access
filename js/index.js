document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this);
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSfkffdkgSzGaQrNl6W1cnYpx8GsfX-s6aq9yL3ha1f4gTo_mA/formResponse', {
      method: 'POST',
      mode: 'no-cors', // CORS must be 'no-cors' for Google Forms which doesn't support CORS
      body: formData,
    }).then(() => {
      document.getElementById('emailForm').style.display = 'none'; // Hide the form
      document.getElementById('thankYouMessage').style.display = 'block'; // Show thank you message
    }).catch(error => {
      console.error('Error!', error.message);
      // Handle the error here if you'd like to notify the user that something went wrong
    });
  });

    document.getElementById('emailForm1').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData1 = new FormData(this);
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSfkffdkgSzGaQrNl6W1cnYpx8GsfX-s6aq9yL3ha1f4gTo_mA/formResponse', {
      method: 'POST',
      mode: 'no-cors', // CORS must be 'no-cors' for Google Forms which doesn't support CORS
      body: formData1,
    }).then(() => {
      document.getElementById('emailForm1').style.display = 'none'; // Hide the form
      document.getElementById('thankYouMessage1').style.display = 'block'; // Show thank you message
    }).catch(error => {
      console.error('Error!', error.message);
      // Handle the error here if you'd like to notify the user that something went wrong
    });
  });