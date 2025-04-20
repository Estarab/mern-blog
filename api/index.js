import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import stakeholderSignUpRoutes from './routes/StakeholderSignUp.route.js';
import subscribeRoutes from './routes/subscribe.route.js'; // Import the subscription route
import donationRoutes from './routes/donation.route.js'; // Import the donation route
import volunteerRoutes from './routes/volunteer.route.js'; // Import the volunteer route
import paymentRoutes from './routes/payment.route.js'; // Import the payment route
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

const __dirname = path.resolve();
const app = express();

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173', // Localhost
  'https://wearetheworldzambia.onrender.com',
  'https://www.wearetheworldzambia.org', // Replace with your Render frontend URL
];

app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Register routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/stakeholder-signup', stakeholderSignUpRoutes);
app.use('/api/subscribe', subscribeRoutes); // Register the subscription route
app.use('/api/donation', donationRoutes); // Register the donation route
app.use('/api/volunteer', volunteerRoutes); // Register the volunteer route
app.use('/api/payment', paymentRoutes); // Register the payment route

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  console.error('Error occurred:', message);
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});


// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRoutes from './routes/user.route.js';
// import authRoutes from './routes/auth.route.js';
// import postRoutes from './routes/post.route.js';
// import commentRoutes from './routes/comment.route.js';
// import stakeholderSignUpRoutes from './routes/StakeholderSignUp.route.js';
// import subscribeRoutes from './routes/subscribe.route.js'; // Import the subscription route
// //import paymentRoutes from './routes/payment.js';
// import donationRoutes from './routes/donation.route.js'; // Import the donation route
// import volunteerRoutes from './routes/volunteer.route.js'; // Import the volunteer route
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import path from 'path';


// dotenv.config();

// mongoose
//   .connect(process.env.MONGO)
//   .then(() => {
//     console.log('MongoDB is connected');
//   })
//   .catch((err) => {
//     console.log('MongoDB connection error:', err);
//   });

// const __dirname = path.resolve();
// const app = express();

// // CORS configuration
// const allowedOrigins = [
//   'http://localhost:5173', // Localhost
//   'https://mern-blog-5ait.onrender.com',
//   'https://wearetheworldzambia.org', // Replace with your Render frontend URL
// ];

// app.use(cors({
//   origin: (origin, callback) => {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
// }));

// app.use(express.json());
// app.use(cookieParser());

// // Register routes
// app.use('/api/user', userRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/post', postRoutes);
// app.use('/api/comment', commentRoutes);
// app.use('/api/stakeholder-signup', stakeholderSignUpRoutes);
// app.use('/api/subscribe', subscribeRoutes); // Register the subscription route
// app.use('/api/donation', donationRoutes); // Register the donation route
// app.use('/api/volunteer', volunteerRoutes); // Register the volunteer route
// //app.use('/api/payment', paymentRoutes);


// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || 'Internal Server Error';
//   console.error('Error occurred:', message);
//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000!');
// });



