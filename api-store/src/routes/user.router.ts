import { Router } from 'express';
import { createNewUser } from '../controllers/user/POST/user.controller';

const router:Router = Router();

router.post('/create-new-user', createNewUser);

export default router;
