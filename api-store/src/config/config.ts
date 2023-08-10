import * as dotenv from 'dotenv';
import type { Config } from '../types/configT';
dotenv.config();
const config: Config = {
   port_server: process.env.PORT_SERVER as string,
   name_db: process.env.NAME_DB as string,
   localhost: process.env.LOCALHOST as string,
   user_db: process.env.USER_DB as string,
   password: process.env.PASSWORD as string,
   port_db: process.env.PORT_DB as string
};
export { config };
