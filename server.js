const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle appointment booking
app.post('/book-appointment', (req, res) => {
  const appointmentData = req.body;

  // You can now use the appointmentData object to process the booking.
  // For example, you might save it to a database or send a confirmation email.

  console.log('Received appointment booking:', appointmentData);

  // Send a response back to the client
  res.status(201).json({
    message: 'Appointment booked successfully!',
    appointment: appointmentData,
  });
});

const PORT = 3001; // Adjust the port as needed
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 3002; // Choose your desired port

// app.use(bodyParser.json());

// // Define your API endpoint to handle appointment bookings
// app.post('/api/bookAppointment', (req, res) => {
//   // Extract appointment details from request body
//   const {
//     name,
//     email,
//     mobile,
//     selectedDate,
//     selectedTime,
//     problemDescription,
//   } = req.body;

//   // Validate appointment details (add your validation logic here)

//   // Send appointment confirmation email
//   sendConfirmationEmail(name, email, selectedDate, selectedTime);

//   // Send response to the frontend
//   res.status(200).json({ message: 'Appointment booked successfully' });
// });

// // Function to send appointment confirmation email
// function sendConfirmationEmail(name, email, selectedDate, selectedTime) {
//   // Create a transporter object using nodemailer
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'your_email@gmail.com', // Enter your email address
//       pass: 'your_password', // Enter your email password or app-specific password
//     },
//   });

//   // Email content
//   const mailOptions = {
//     from: 'your_email@gmail.com', // Sender email address
//     to: email, // Receiver email address
//     subject: 'Appointment Confirmation',
//     html: `
//       <p>Dear ${name},</p>
//       <p>Your appointment has been booked successfully.</p>
//       <p>Date: ${selectedDate}</p>
//       <p>Time: ${selectedTime}</p>
//       <p>Thank you for choosing us!</p>
//     `,
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// }

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
