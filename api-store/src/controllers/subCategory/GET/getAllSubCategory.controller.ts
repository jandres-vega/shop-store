import type { Request, Response, NextFunction } from 'express';
import { SubCategoryService } from '../../../services/subCategory.service';
import type { SubCategory } from '../../../db/models/subCategory.model';

const serviceSubCategory = new SubCategoryService();
const getAllSubCategory = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const allSubCategories: SubCategory[] =
         await serviceSubCategory.findAllSubCategories();
      res.status(200).send(allSubCategories);
   }
 catch (e) {
      next(e);
   }
};

export { getAllSubCategory };
