import type { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../../../services/category.service';
const categoryService = new CategoryService();
const updateCategory = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const body = req.body;
      const { id } = req.params;
      const categoryUpdate = await categoryService.updateCategory(body, id);
      res.status(200).send(categoryUpdate);
   }
 catch (e) {
      next(e);
   }
};
export { updateCategory };
