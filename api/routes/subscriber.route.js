import express from 'express';
import Subscriber from '../models/Subscriber.js';
import sendConfirmationEmail from '../utils/mailer.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    await sendConfirmationEmail(email);

    res.status(200).json({ message: 'Subscription successful! Check your email for confirmation.' });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;


// import express from 'express';
// import Subscriber from '../models/Subscriber.js'; // Adjust the path if needed
// import sendConfirmationEmail from '../utils/mailer.js'; // Adjust the path if needed

// const router = express.Router();

// // POST /api/subscribe
// router.post('/subscribe', async (req, res) => {
//   try {
//     const { email } = req.body;
//     const subscriber = new Subscriber({ email });
//     await subscriber.save();
//     await sendConfirmationEmail(email);
//     res.status(200).json({ message: 'Subscription successful' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// export default router;
