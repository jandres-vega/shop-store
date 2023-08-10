import type { Express } from 'express';
import { Router } from 'express';
import routerSubCategory from './subCategory.router';
import routerCategory from './category.router';
import routerProduct from './product.router';
function routes(app: Express): void {
   const router = Router();
   app.use('/api/v1', router);
   router.use('/sub-category', routerSubCategory);
   router.use('/category', routerCategory);
   router.use('/product', routerProduct);
}

export { routes };
