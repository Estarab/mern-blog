import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // or another email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendConfirmationEmail = (to) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Subscription Confirmation',
    text: 'Thank you for subscribing to our newsletter!',
  };

  return transporter.sendMail(mailOptions)
    .then(info => console.log('Email sent: ' + info.response))
    .catch(error => {
      console.error('Error sending email:', error);
      throw error; // Re-throw the error to be handled by the route handler
    });
};

export default sendConfirmationEmail;


// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: 'gmail', // or another email service
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const sendConfirmationEmail = (to) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to,
//     subject: 'Subscription Confirmation',
//     text: 'Thank you for subscribing to our newsletter!',
//   };

//   return transporter.sendMail(mailOptions);
// };

// export default sendConfirmationEmail;
