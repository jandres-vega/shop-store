import Boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import sequelize from '../libs/conexion';
import { User } from '../db/models/user.model';
import { UserT } from '../types/modelsT/user';


class UserService {
    async findAllUser(): Promise<User[]> {
        return await sequelize.models.User.findAll();
    }

    async findUserById(id: string): Promise<User> {
        const userFind: User | null = await sequelize.models.User.findByPk(id);
        if (!userFind) {
            throw Boom.notFound('Usuario no encontrado');
        }
        else {
            return userFind;
        }
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return await sequelize.models.User.findOne({
            where: {
                email: email
            }
        });

    }

    async createUser(body: UserT): Promise<User> {

        const {
            email,
            password
        } = body;
        let passEncrypt: string = '';
        if (password) {
            passEncrypt = await bcrypt.hash(password, 10);
        }
        const users: User[] = await this.findAllUser();
        const userFInd: User | undefined = users.find((user: User): boolean => {
            return user.dataValues.email === email;
        });
        if (userFInd) {
            throw Boom.conflict('El usuario ya se encuentra registrado');
        }
        const newUser: User = await sequelize.models.User.create({
            ...body,
            password: passEncrypt
        });

        delete newUser.dataValues.password;
        return newUser;
    }
}

export { UserService };