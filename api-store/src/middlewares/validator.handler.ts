import type { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';
import type { Schema } from 'joi';
import type { Property } from '../types/interfaceRequest';

const validatorHandler = (schema: Schema, property: Property) => {
   return function (req: Request, res: Response, next: NextFunction) {
      const data = req[property];
      const { error } = schema.validate(data, { abortEarly: false });
      if (error != null) {
         next(Boom.badRequest(error));
      }
      next();
   };
};

export { validatorHandler };
