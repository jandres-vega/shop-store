import type { Sequelize } from 'sequelize';
import { Product, productSchema } from './models/product.model';
import { Category, categorySchema } from './models/category.model';
import { SubCategory, subCategorySchema } from './models/subCategory.model';
import { User, userSchema } from './models/user.model';
import { Address, addressSchema } from './models/address';

export const setupModels = (sequelize: Sequelize): void => {
   SubCategory.init({ ...subCategorySchema }, SubCategory.config(sequelize));
   Category.init({ ...categorySchema }, Category.config(sequelize));
   Product.init({ ...productSchema }, Product.config(sequelize));
   User.init({ ...userSchema }, User.config(sequelize));
   Address.init({ ...addressSchema }, Address.config(sequelize));

   Product.association(sequelize);
   Category.association(sequelize);
   SubCategory.association(sequelize);
   User.association(sequelize);
   Address.association(sequelize);
};
