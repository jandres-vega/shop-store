import { config } from './config/config';
import { app } from './App';
import sequelize from './libs/conexion';

sequelize.sync({ force: true }).then(async (): Promise<void> => {
    app.listen(config.port_server, async (): Promise<void> => {
        console.log('listen o port ' + config.port_server);
    });
});
