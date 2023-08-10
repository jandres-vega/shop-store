import type { Request, Response, NextFunction } from 'express';
import { SubCategoryService } from '../../../services/subCategory.service';
import type { SubCategory } from '../../../db/models/subCategory.model';
const serviceSubCategory = new SubCategoryService();
const updateSubCategory = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const { id } = req.params;
      const body = req.body;
      const subCategory: SubCategory =
         await serviceSubCategory.updateSubCategory(id, body);
      res.status(200).send(subCategory);
   }
 catch (e) {
      next(e);
   }
};

export { updateSubCategory };
