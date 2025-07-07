import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import User from '../models/User';

interface AuthedRequest extends Request {
  user?: string | JwtPayload;
}

export const getMe = async (req: AuthedRequest, res: Response) => {
  try {
    if (
      !req.user ||
      typeof req.user === 'string' ||
      !(req.user as JwtPayload).id
    ) {
      return res.status(401).json({ error: 'Unauthorized: User not found' });
    }

    const id = (req.user as JwtPayload).id;
    const user = await User.findById(id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
