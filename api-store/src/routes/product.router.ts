import { Router } from 'express';
import { getAllProducts } from '../controllers/product/GET/getAllProducts.controller';
import { getProductById } from '../controllers/product/GET/getProductById.controller';
import { createPrduct } from '../controllers/product/POST/product.controller';
import { deleteProduct } from '../controllers/product/DELETE/product.controller';
import { updateProduct } from '../controllers/product/UPDATE/product.controller';
import { validatorHandler } from '../middlewares/validator.handler';
import {
   schemaProductId,
   schemaProductUpdate,
   schemaProductCreate
} from '../schemas/product.schema';
import { Property } from '../types/interfaceRequest';

const router: Router = Router();

router.get('/get-all', getAllProducts);
router.get(
   '/:id',
   validatorHandler(schemaProductId, Property.params),
   getProductById
);
router.delete(
   '/delete/:id',
   validatorHandler(schemaProductId, Property.params),
   deleteProduct
);
router.put(
   '/update/:id',
   validatorHandler(schemaProductId, Property.params),
   validatorHandler(schemaProductUpdate, Property.body),
   updateProduct
);
router.post(
   '/create',
   validatorHandler(schemaProductCreate, Property.body),
   createPrduct
);

export default router;
