import type { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';
import type { TypeErrors } from '../types/interfaceErrors';
const logErrors = (
   error: any,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   console.log(error);
   next(error);
};

const boomErrorHandler = (
   error: any,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   if (Boom.isBoom(error)) {
      const { output } = error;
      res.status(output.statusCode).json(output.payload);
   }
   next(error);
};

const errorHandler = (
   error: any,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const typeError: TypeErrors = {
      message: error.message,
      stack: error.stack
   };
   res.status(500).json(typeError);
};

export { logErrors, boomErrorHandler, errorHandler };
