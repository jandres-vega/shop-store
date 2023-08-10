import type { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../../../services/category.service';
import type { Category } from '../../../db/models/category.model';
const categoryService = new CategoryService();
const createCategory = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const body = req.body;
      const newCategory: Category = await categoryService.createCategory(body);
      res.status(200).send(newCategory);
   }
 catch (e) {
      next(e);
   }
};

export { createCategory };
