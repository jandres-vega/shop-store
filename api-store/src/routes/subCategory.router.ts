import { Router } from 'express';
import { createSubCategory } from '../controllers/subCategory/POST/subCategory.controller';
import { validatorHandler } from '../middlewares/validator.handler';
import {
   subCategoryIdSchema,
   subCategorySchema,
   subCategoryUpdateSchema
} from '../schemas/subCategory.schema';
import { Property } from '../types/interfaceRequest';
import { getAllSubCategory } from '../controllers/subCategory/GET/getAllSubCategory.controller';
import { getAllSubCategoryById } from '../controllers/subCategory/GET/getSubCategoryById.controller';
import { deleteSubCategory } from '../controllers/subCategory/DELETE/subCategory.controller';
import { updateSubCategory } from '../controllers/subCategory/UPDATE/subCategory.controller';

const router: Router = Router();

router.get('/get-all', getAllSubCategory);
router.get(
   '/sub-id/:id',
   validatorHandler(subCategoryIdSchema, Property.params),
   getAllSubCategoryById
);
router.put(
   '/update-sub/:id',
   validatorHandler(subCategoryIdSchema, Property.params),
   validatorHandler(subCategoryUpdateSchema, Property.body),
   updateSubCategory
);
router.delete(
   '/delete-sub/:id',
   validatorHandler(subCategoryIdSchema, Property.params),
   deleteSubCategory
);
router.post(
   '/create-sub',
   validatorHandler(subCategorySchema, Property.body),
   createSubCategory
);

export default router;
