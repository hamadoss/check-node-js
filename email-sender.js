const nodemailer = require('nodemailer');

// Create a transporter with your email service provider details
const transporter = nodemailer.createTransport({
  service: 'riazak28@gmail.com',
  auth: {
    user: 'hamadaalibi119@gmail.com',
    pass: '53465940hm',
  },
});

// Define the email options
const mailOptions = {
  from: 'hamadaalibi119@gmail.com',
  to: 'riazak28@gmail.com', 
  subject: 'Test Email',
  text: 'This is a test email from Nodemailer!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
