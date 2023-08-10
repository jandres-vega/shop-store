import type { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../../../services/category.service';

const categoryService = new CategoryService();
const deleteCategory = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<void> => {
   try {
      const { id } = req.params;
      const categoryDelete: string = await categoryService.deleteCategoryById(
         id
      );
      res.status(200).json({
         message: categoryDelete
      });
   }
 catch (e) {
      next(e);
   }
};
export { deleteCategory };
