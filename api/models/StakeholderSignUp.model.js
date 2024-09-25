import mongoose from 'mongoose';

const stakeholderSignUpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
});

const StakeholderSignUpModel = mongoose.model('StakeholderSignUp', stakeholderSignUpSchema);
export default StakeholderSignUpModel;
