import type { Request, Response, NextFunction } from 'express';
import { SubCategoryService } from '../../../services/subCategory.service';
const serviceSubCategory = new SubCategoryService();
const deleteSubCategory = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const { id } = req.params;
      const response: string = await serviceSubCategory.deleteSubCategory(id);
      res.status(200).send({
         message: response
      });
   }
 catch (e) {
      next(e);
   }
};

export { deleteSubCategory };
