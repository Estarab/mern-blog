import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletepost, getposts, updatepost } from '../controllers/post.controller.js';

const router = express.Router();

// Route to create a post
router.post('/create', verifyToken, create);

// Route to get posts
router.get('/getposts', getposts);

// Route to delete a post
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost);

// Route to update a post
router.put('/updatepost/:postId/:userId', verifyToken, updatepost);

export default router;


// import express from 'express';
// import { verifyToken } from '../utils/verifyToken.js'; // Updated import path
//  { checkSuperUser } from '../middleware/checkSuperUser.js';
// import { create, deletepost, getposts, updatepost } from '../controllers/post.controller.js';

// const router = express.Router();

// // Middleware stack for create and update routes
// const superUserMiddleware = [verifyToken, checkSuperUser];

// // Routes
// router.post('/create', superUserMiddleware, create);
// router.get('/getposts', getposts);
// router.delete('/deletepost/:postId/:userId', verifyToken, checkSuperUser, deletepost);
// router.put('/updatepost/:postId/:userId', superUserMiddleware, updatepost);

// export default router;

