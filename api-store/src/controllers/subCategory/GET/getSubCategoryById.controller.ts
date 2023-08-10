import type { Request, Response, NextFunction } from 'express';
import type { SubCategory } from '../../../db/models/subCategory.model';
import { SubCategoryService } from '../../../services/subCategory.service';
const serviceSubCategory = new SubCategoryService();
const getAllSubCategoryById = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const { id } = req.params;
      const categoryFind: SubCategory =
         await serviceSubCategory.findSubCategoryById(id);
      res.status(200).send(categoryFind);
   }
 catch (e) {
      next(e);
   }
};

export { getAllSubCategoryById };
