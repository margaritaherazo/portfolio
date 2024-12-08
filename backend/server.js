// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other email service
  auth: {
    user: 'your-email@gmail.com', // replace with your email
    pass: 'your-email-password', // replace with your email password or app password
  },
});

// Define the email sending endpoint
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'margarita.herazo.i@gmail.com', // replace with your email
    subject: `Message from ${name}`,
    text: `Message: ${message}\nFrom: ${name}\nEmail: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
