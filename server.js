const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Server = express();
const port = 8000;

// Enable CORS for all routes
Server.use(cors());

// Middleware to parse JSON bodies
Server.use(bodyParser.json());

// Endpoint to handle appointment booking
Server.post('/book-appointment', (req, res) => {
  const {
    selectedDate,
    selectedTime,
    name,
    email,
    mobile,
    problemDescription,
  } = req.body;

  console.log('Received appointment data:');
  console.log(`Date: ${selectedDate}`);
  console.log(`Time: ${selectedTime}`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Mobile: ${mobile}`);
  console.log(`Problem Description: ${problemDescription}`);

  res.status(200).send('Appointment booked successfully');
});

Server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
