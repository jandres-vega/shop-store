import type { Request, Response, NextFunction } from 'express';
import { ProductService } from '../../../services/product.service';
import type { Product } from '../../../db/models/product.model';

const serviceProduct = new ProductService();

const getProductById = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const { id } = req.params;
      const productFind: Product = await serviceProduct.getProductById(id);
      res.status(200).send(productFind);
   }
 catch (e) {
      next(e);
   }
};
export { getProductById };
