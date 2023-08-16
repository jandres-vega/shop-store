import { Request, Response, NextFunction, Express } from 'express';
import { AuthUserService } from '../../services/authUser.service';
import { UserT } from '../../types/modelsT/user';

const authService = new AuthUserService();
const authUser = async(req:Request, res:Response, next:NextFunction):Promise<void> => {
    try {
        const userData = req.user as UserT;
        const userWithToken = await authService.loginUser(userData);
        res.status(200).send(userWithToken);
    }
catch (e) {
        next(e);
    }
};

export { authUser };
