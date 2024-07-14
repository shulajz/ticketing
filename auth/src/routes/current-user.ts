import express from 'express';
import { currentUser } from '@shulajztickets/common';
//r
const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
