import Subscriber from '../models/Subscriber.js'; // Adjust the path if needed
import sendConfirmationEmail from '../utils/mailer.js'; // Adjust the path if needed

export const subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    // Save the email to the database
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Send confirmation email
    await sendConfirmationEmail(email);

    res.status(201).json({ message: 'Subscription successful! Check your email for confirmation.' });
  } catch (error) {
    res.status(500).json({ message: 'Error during subscription process', error });
  }
};
