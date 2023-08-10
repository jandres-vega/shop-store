import type { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../../../services/category.service';
import type { Category } from '../../../db/models/category.model';
const categoryService = new CategoryService();
const getCategoryByName = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const { nameCategory } = req.query;
      if (typeof nameCategory === 'string') {
         const categoryName: Category =
            await categoryService.findCategoryByName(nameCategory);
         res.status(200).send(categoryName);
      }
   }
 catch (e) {
      next(e);
   }
};

export { getCategoryByName };
