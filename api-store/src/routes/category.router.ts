import { Router } from 'express';
import { createCategory } from '../controllers/category/POST/category.controller';
import { getAllCategories } from '../controllers/category/GET/getAllCategories';
import { getCategoryByName } from '../controllers/category/GET/getCategoryByName';
import { validatorHandler } from '../middlewares/validator.handler';
import {
   schemaCategory,
   schemaCategoryId,
   schemaCategoryUpdate
} from '../schemas/category.schema';
import { getCategoryById } from '../controllers/category/GET/getCategoryById';
import { Property } from '../types/interfaceRequest';
import { updateCategory } from '../controllers/category/UPDATE/category.controller';
import { deleteCategory } from '../controllers/category/DELETE/category.controller';

const router: Router = Router();

router.get('/get-all', getAllCategories);
router.get('/filter-category', getCategoryByName);
router.get(
   '/:id',
   validatorHandler(schemaCategoryId, Property.params),
   getCategoryById
);
router.put(
   '/update/:id',
   validatorHandler(schemaCategoryId, Property.params),
   validatorHandler(schemaCategoryUpdate, Property.body),
   updateCategory
);
router.delete(
   '/delete/:id',
   validatorHandler(schemaCategoryId, Property.params),
   deleteCategory
);
router.post(
   '/create-category',
   validatorHandler(schemaCategory, Property.body),
   createCategory
);

export default router;
