import { Request, Response, NextFunction, Express } from 'express';
import { AuthUserService } from '../../services/authUser.service';
import { User } from '../../db/models/user.model';

const authService = new AuthUserService();
const authUser = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const userData = req.user as User;
        const userWithToken = await authService.loginUser(userData.dataValues);
        res.status(200).send(userWithToken);
    }
catch (e) {
        next(e);
    }
};

export { authUser };
