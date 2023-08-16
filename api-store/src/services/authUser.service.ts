import jwt from 'jsonwebtoken';
import { PayloadJwt } from '../types/login';
import { UserT } from '../types/modelsT/user';
import { config } from '../config/config';

class AuthUserService {
    async loginUser(user:UserT):Promise<{user:UserT, token: string}>{
        const payload:PayloadJwt = {
            sub: user.id,
            role: user.isAdmin
        };

        const token:string = jwt.sign(payload, config.jwt_keygen);
        return {
            user,
            token
        };

    }
}

export { AuthUserService };