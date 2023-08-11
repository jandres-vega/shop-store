import express, { Express } from 'express';
import morgan from 'morgan';
import session from 'express-session';
import {
   errorHandler,
   boomErrorHandler,
   logErrors
} from './middlewares/handle.errors';
import { routes } from './routes';
const app: Express = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(session({
   secret: 'MORyBaId3WYq12UTszkfV9AJow0EebNZ',
   resave: false,
   saveUninitialized: false
}));

import './utils/auth';

routes(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

export { app };
