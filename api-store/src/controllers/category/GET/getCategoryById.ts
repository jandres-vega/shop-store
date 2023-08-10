import type { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../../../services/category.service';
import type { Category } from '../../../db/models/category.model';

const serviceCategory = new CategoryService();
const getCategoryById = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const { id } = req.params;
      const categoryFind: Category = await serviceCategory.findCategoryById(id);
      res.status(200).send(categoryFind);
   }
 catch (e) {
      next(e);
   }
};
export { getCategoryById };
