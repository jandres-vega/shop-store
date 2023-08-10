import type { Request, Response, NextFunction } from 'express';
import { ProductService } from '../../../services/product.service';
import type { Product } from '../../../db/models/product.model';

const serviceProduct = new ProductService();

const createPrduct = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const body = req.body;
      const productFind: Product = await serviceProduct.createProduct(body);
      res.status(200).send(productFind);
   }
 catch (e) {
      next(e);
   }
};
export { createPrduct };
