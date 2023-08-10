import { Sequelize } from 'sequelize';
import { config } from '../config/config';
import { setupModels } from '../db';
const pass: string = decodeURIComponent(config.password);
const user: string = encodeURIComponent(config.user_db);

const URL_DB = `postgres://${user}:${pass}@${config.localhost}:${config.port_db}/${config.name_db}`;

const sequelize: Sequelize = new Sequelize(URL_DB, {
   dialect: 'postgres',
   logging: false
});

setupModels(sequelize);

export default sequelize;
