import type { Request, Response, NextFunction } from 'express';
import { ProductService } from '../../../services/product.service';
import type { Product } from '../../../db/models/product.model';

const serviceProduct = new ProductService();

const getAllProducts = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const allProducts: Product[] = await serviceProduct.getAllProducts();
      res.status(200).send(allProducts);
   }
 catch (e) {
      next(e);
   }
};
export { getAllProducts };
