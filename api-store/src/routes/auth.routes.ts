import { Router } from 'express';
import passport from 'passport';
import { authUser } from '../controllers/auth/auth.controller';

const router = Router();

router.post('/', passport.authenticate('local'), authUser);

export default router;