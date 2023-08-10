import type { Request, Response, NextFunction } from 'express';
import { ProductService } from '../../../services/product.service';

const serviceProduct = new ProductService();
const deleteProduct = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const { id } = req.params;
      const productFind: string = await serviceProduct.deleteProduct(id);
      res.status(200).send(productFind);
   }
 catch (e) {
      next(e);
   }
};
export { deleteProduct };
