import express, { type Express } from 'express';
import morgan from 'morgan';
import {
   errorHandler,
   boomErrorHandler,
   logErrors
} from './middlewares/handle.errors';
import { routes } from './routes';
const app: Express = express();

app.use(express.json());
app.use(morgan('dev'));

routes(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

export { app };
