const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // You can change this to your desired port

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  // Basic input validation
  

  // Email configuration (replace with your actual credentials)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your email provider's SMTP server
    port: 587, // Replace with the appropriate port
    secure: false, // True for 465, false for other ports
    auth: {
      user: 'paulo.lopes2703@gmail.com', // Replace with your email address
      pass: 'wejv ppkf rcrs xvtv', // Replace with your email password
    },
  });

  // Email options

  
  const mailOptions = {
    from: email, // Sender's email address
    to: 'paulo.lopes2703@gmail.com', // Recipient's email address
    subject: 'New Message from Portfolio Website',
    text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email.' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Message sent successfully!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});