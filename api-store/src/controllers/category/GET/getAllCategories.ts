import type { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../../../services/category.service';
import type { Category } from '../../../db/models/category.model';

const categoryService = new CategoryService();
const getAllCategories = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const categories: Category[] = await categoryService.findAllCategories();
      res.status(200).send(categories);
   }
 catch (e) {
      next(e);
   }
};

export { getAllCategories };
