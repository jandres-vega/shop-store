import { Router } from 'express';
import { createNewUser } from '../controllers/user/POST/user.controller';
import { getAllUsers } from '../controllers/user/GET/user.controller';
import { validatorHandler } from '../middlewares/validator.handler';
import { schemaCreateUser } from '../schemas/user.schema';
import { Property } from '../types/interfaceRequest';

const router: Router = Router();

router.get('/all-users', getAllUsers);
router.post('/create-new-user', validatorHandler(schemaCreateUser, Property.body), createNewUser);

export default router;
