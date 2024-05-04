const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const Server = express();
const port = 8000;

// Enable CORS for all routes
Server.use(cors());

// Middleware to parse JSON bodies
Server.use(bodyParser.json());

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Vishaka7721@gmail.com',
    pass: 'Vishaka3636',
  },
});

// Endpoint to handle appointment booking
Server.post('/book-appointment', async (req, res) => {
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

  // Simulate booking appointment with timeout
  setTimeout(() => {
    res.status(200).send('Appointment booked successfully');
  }, 1000); // Simulate delay before setting booked state
});

// Endpoint to send email to the selected doctor
Server.post('/send-email', async (req, res) => {
  const { doctorEmail, formData } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: doctorEmail,
    subject: 'New Appointment',
    text: `You have a new appointment request:\n\nDate: ${formData.selectedDate}\nTime: ${formData.selectedTime}\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nProblem Description: ${formData.problemDescription}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent to doctor successfully');
    res.status(200).send('Email sent to doctor successfully');
  } catch (error) {
    console.error('Error sending email to doctor:', error);
    res.status(500).send('Error sending email to doctor');
  }
});

Server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
