import { Strategy } from 'passport-local';
import { unauthorized } from '@hapi/boom';
import bcrypt from 'bcrypt';
import { OptionsLocalFields } from '../../../types/optiosStrategys';
import { UserService } from '../../../services/user.service';
import { User } from '../../../db/models/user.model';
import { UserT } from '../../../types/modelsT/user';

const userService = new UserService();

const options: OptionsLocalFields = {
    usernameField: 'email',
    passwordField: 'password'
};

const localStrategy = new Strategy(options, async (email, password, done) => {
    try {
        const user: User | null = await userService.findUserByEmail(email);
        if (!user) {
            done(unauthorized('No estas autorizado'), false);
        }
        else {
            const isMatch: boolean = await bcrypt.compare(password, user.dataValues.password);
            if (!isMatch) {
                done(unauthorized('No estas autorizado'), false);
            }
            delete user.dataValues.password;
            done(null, user);
        }
    }
 catch (e) {
        done(e);
    }
});

export { localStrategy };