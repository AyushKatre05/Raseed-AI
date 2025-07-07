import e from 'express';
import express from 'express';
const router = express.Router();
import auth  from '../middleware/auth';
import { getMe } from '../controllers/userController';

// Protected route (requires JWT)
router.get('/profile', auth as express.RequestHandler, (req, res, next) => {
  Promise.resolve(getMe(req, res)).catch(next);
});

export default router;