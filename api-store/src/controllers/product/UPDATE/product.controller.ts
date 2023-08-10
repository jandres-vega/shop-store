import type { Request, Response, NextFunction } from 'express';
import { ProductService } from '../../../services/product.service';
import type { Product } from '../../../db/models/product.model';

const serviceProduct = new ProductService();

const updateProduct = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const { id } = req.params;
      const body: Product = req.body;
      const productFind: Product = await serviceProduct.updateProduct(id, body);
      res.status(200).send(productFind);
   }
 catch (e) {
      next(e);
   }
};
export { updateProduct };
