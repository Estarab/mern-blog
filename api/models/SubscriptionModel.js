import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Prevent duplicate subscriptions
  },
}, { timestamps: true });

const SubscriptionModel = mongoose.model('Subscription', SubscriptionSchema);
export default SubscriptionModel;
