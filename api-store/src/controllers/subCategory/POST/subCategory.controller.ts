import type { Request, Response, NextFunction } from 'express';
import { SubCategoryService } from '../../../services/subCategory.service';
import type { SubCategory } from '../../../db/models/subCategory.model';

const subCategoryService = new SubCategoryService();
const createSubCategory = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const body = req.body;
      const newSubCategory: SubCategory =
         await subCategoryService.createSubCategories(body);
      res.status(200).send(newSubCategory);
   }
 catch (e) {
      next(e);
   }
};

export { createSubCategory };
