import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  stakeholderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Stakeholder' },
  title: { type: String, required: true },
  content: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
