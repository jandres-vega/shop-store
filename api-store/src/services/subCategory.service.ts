import Boom from '@hapi/boom';
import sequelize from '../libs/conexion';
import type { SubCategory } from '../db/models/subCategory.model';
import type { SubCategoryI } from '../types/modelsT/subCategory';
import { CategoryService } from './category.service';

const serviceCategory = new CategoryService();

class SubCategoryService {
   async findAllSubCategories(): Promise<SubCategory[]> {
      return await sequelize.models.SubCategory.findAll();
   }

   async createSubCategories(body: SubCategoryI): Promise<SubCategory> {
      const { name_subCategory, image_SubCategory, CategoryId } = body;
      const getSubCategories: SubCategory[] = await this.findAllSubCategories();

      const categoryRepeat: SubCategory | undefined = getSubCategories.find(
         (sub: SubCategory) => {
            return (
               sub.dataValues.name_subCategory === name_subCategory ||
               sub.dataValues.image_SubCategory === image_SubCategory
            );
         }
      );

      if (categoryRepeat != null) {
         throw Boom.conflict('sub categoria ya fue creada');
      }
 else {
         await serviceCategory.findCategoryById(CategoryId);
         return await sequelize.models.SubCategory.create({ ...body });
      }
   }

   async findSubCategoryById(id: string): Promise<SubCategory> {
      const subCategory: SubCategory | null =
         await sequelize.models.SubCategory.findByPk(id);
      if (subCategory == null) {
         throw Boom.notFound('Sub categoria no encontrada');
      }

      return subCategory;
   }

   async deleteSubCategory(id: string): Promise<string> {
      console.log(id);
      const findSubCategory: SubCategory = await this.findSubCategoryById(id);
      const idSubCategory: string = id;
      await findSubCategory.destroy();
      return `La sub categoria con ID ${idSubCategory} fue eliminado correctamente`;
   }

   async updateSubCategory(
      id: string,
      body: SubCategoryI
   ): Promise<SubCategory> {
      const findSubCategory: SubCategory = await this.findSubCategoryById(id);
      return await findSubCategory.update(body);
   }
}
export { SubCategoryService };
