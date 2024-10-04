import express from 'express';
import nodemailer from 'nodemailer'; // Or any email service you are using

const router = express.Router();

// POST route for sending donation details
router.post('/donation.route', async (req, res) => {
  const { name, email, phone, amount, paymentMethod } = req.body;

  // Set up nodemailer or your preferred email service
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Example service, adjust as needed
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'recipient@example.com', // Replace with your recipient email
    subject: 'New Donation',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAmount: ${amount}\nPayment Method: ${paymentMethod}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Donation details sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send donation details.');
  }
});

export default router;



// import express from 'express';
// import nodemailer from 'nodemailer';

// const router = express.Router();

// // Configure the email transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // or another email service
//   auth: {
//     user: process.env.EMAIL_USER, // your email address from .env
//     pass: process.env.EMAIL_PASS, // your email password from .env
//   },
// });

// // Donation endpoint
// router.post('/send-donation', (req, res) => {
//   const { name, email, phone, amount, paymentMethod } = req.body;

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.RECEIVER_EMAIL, // the email to send to
//     subject: 'New Donation Received',
//     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAmount: K${amount}\nPayment Method: ${paymentMethod}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.status(200).send('Email sent: ' + info.response);
//   });
// });

// export default router;
