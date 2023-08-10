import { Request, Response, NextFunction } from 'express';
import { UserService } from '../../../services/user.service';
import { User } from '../../../db/models/user.model';

const userService = new UserService();

const getAllUsers = async(req:Request, res:Response, next:NextFunction):Promise<void> => {
    try {
        const allUser:User[] =await userService.findAllUser();
        res.status(200).send(allUser);
    }
    catch (e) {
        next(e);
    }
};

export { getAllUsers };