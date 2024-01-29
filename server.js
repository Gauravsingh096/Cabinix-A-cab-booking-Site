const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

// Define a route for signin.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

app.get('/public/signin.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signin.html'));
});

app.get('/assets/carmain.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'carmain.png'));
});
app.get('/assets/unnamed (1).png', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'unnamed (1).png'));
});
app.get('/public/signup.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});
app.get('/public/booking.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'booking.html'));
});
// all ajvascript file 

app.get('/js/booking.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'js', 'booking.js'));
});

app.get('/js/datapassen.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'js', 'datapassen.js'));
});

app.get('/js/mail.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'js', 'mail.js'));
});

app.get('/js/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'js', 'script.js'));
});

app.get('/js/sign_up.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'js', 'sign_up.js'));
});
app.get('/css/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'css', 'style.css'));
});
app.get('/assets/testimonial back.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'testinomial back.png'));
});
app.get('/CSS/1.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'CSS', '1.css'));
});
app.get('/CSS/sign_in.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'CSS', 'sign_in.css'));
});

app.get('/CSS/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'CSS', 'style.css'));
});
app.get('/CSS/booking.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'CSS', 'booking.css'));
});
app.get('/css/sign_in.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'CSS', 'sign_in.css'));
});
app.get('/CSS/styles2.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'CSS', 'styles2.css'));
});
app.get('/assets/5cb6d34f775c2-stock-models-share-weirdest-stories-photo-use-102-5cb5c725bc378_700.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'assets', '5cb6d34f775c2-stock-models-share-weirdest-stories-photo-use-102-5cb5c725bc378_700.jpg'));
});

app.get('/assets/41WN+1yDKmL.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'assets', '41WN+1yDKmL.png'));
});
app.get('/assets/5cb6d34f775c2-stock-models-share-weirdest-stories-photo-use-102-5cb5c725bc378_700.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'assets', '5cb6d34f775c2-stock-models-share-weirdest-stories-photo-use-102-5cb5c725bc378_700.jpg'));
});

app.get('/assets/41WN+1yDKmL.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'assets', '41WN+1yDKmL.png'));
});

// Define routes for HTML pages
app.get('/public/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/public/blog.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

app.get('/public/booking', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'booking.html'));
});

app.get('/contacts', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contacts.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'gallery.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signin.html'));
});
// images 
app.get('/assets/CabHUB.png', (req, res) => {
  res.sendFile(path.join(__dirname,'assets', 'CabHUB.png'));
});

app.get('/assets/carmain.png', (req, res) => {
  res.sendFile(path.join(__dirname,'assets', 'carmain.png'));
});
app.get('/assets/background.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'background.png'));
});

app.get('/assets/download.png', (req, res) => {
  res.sendFile(path.join(__dirname,'assets', 'download.png'));
});

app.get('/assets/ebd05cc8b06f4c439bccef6994f74fc1.webp', (req, res) => {
  res.sendFile(path.join(__dirname,'assets', 'ebd05cc8b06f4c439bccef6994f74fc1.webp'));
});

app.get('/assets/image1.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'image1.png'));
});

app.get('/assets/jhon.png', (req, res) => {
  res.sendFile(path.join(__dirname,'assets', 'jhon.png'));
});

app.get('/assets/logo.png', (req, res) => {
  res.sendFile(path.join(__dirname,'assets', 'logo.png'));
});

app.get('/assets/logofinal.png', (req, res) => {
  res.sendFile(path.join(__dirname,'assets', 'logofinal.png'));
});

app.get('/assets/png-transparent-checker-taxi-logo-yellow-cab-taxi-label-text-triangle.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'png-transparent-checker-taxi-logo-yellow-cab-taxi-label-text-triangle.png'));
});

app.get('/assets/secbg.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'secbg.png'));
});

app.get('/assets/testimonial back.png', (req, res) => {
  res.sendFile(path.join(__dirname,  'assets', 'testimonial back.png'));
});

app.get('/assets/unnamed (1).png', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'unnamed (1).png'));
});

app.get('/assets/unnamed.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'unnamed.png'));
});

app.get('/assets/a8fbedb7e2d93a6ada5eeb3784d93806.jpg', (req, res) => {
  res.sendFile(path.join(__dirname,'assets', 'a8fbedb7e2d93a6ada5eeb3784d93806.jpg'));
});


app.post('/submitForm', (req, res) => {
  const data = req.body;
  const jsonData = JSON.stringify(data, null, 2) + '\n';

  fs.appendFile('data.json', jsonData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data stored successfully:', jsonData);
      // res.status(200).send('Data stored successfully');
      res.redirect('/signup.html');

    }
  });
});
app.post('/submitBooking', (req, res) => {
  const bookingData = req.body;
  const jsonData = JSON.stringify(bookingData, null, 2) + '\n';

  fs.appendFile('bookingdata.json', jsonData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('THANKYOU - FOR BOOKING OUR TAXI 😀:', jsonData);
      res.status(200).send('THANKYOU - FOR BOOKING OUR TAXI 😀:');
    }
  });
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
