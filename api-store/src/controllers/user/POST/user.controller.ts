import { Request, Response, NextFunction } from 'express';
import { UserService } from '../../../services/user.service';
import { User } from '../../../db/models/user.model';

const userService = new UserService();

const createNewUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const body = req.body;
        const newUser:User =await userService.createUser(body);
        res.status(200).send(newUser);
    }
    catch (e) {
        next(e);
    }
};

export { createNewUser };