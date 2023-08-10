import Boom from '@hapi/boom';
import sequelize from '../libs/conexion';
import type { CategoryI } from '../types/modelsT/category';
import { Category } from '../db/models/category.model';
import { SubCategory } from '../db/models/subCategory.model';

class CategoryService {
    async findAllCategories(): Promise<Category[]> {
        return await Category.findAll({
            include: [
                {
                    model: SubCategory
                }
            ]
        });
    }

    async findCategoryByName(nameCategory: string): Promise<Category> {
        if (!nameCategory) {
            throw Boom.badRequest('El nombre de la categoria es requerida');
        }
        const categoryName: Category | null =
            await sequelize.models.Category.findOne({
                where: { name_category: nameCategory },
                include: [
                    {
                        model: SubCategory,
                        attributes: ['id', 'name_subCategory', 'image_SubCategory']
                    }
                ]
            });
        if (categoryName == null) {
            throw Boom.notFound('Categoria no encontrada');
        }
        return categoryName;
    }

    async findCategoryById(id: string): Promise<Category> {
        const category: Category | null = await Category.findByPk(id, {
            include: [
                {
                    model: SubCategory
                }
            ]
        });
        if (category == null) {
            throw Boom.notFound('Categoria no encontrada');
        }
        return category;
    }

    async deleteCategoryById(id: string): Promise<string> {
        const category: Category = await this.findCategoryById(id);
        const idCategory: string = id;
        await category?.destroy();
        return `La categoria con ID ${idCategory} fue eiliminada correctamente`;
    }

    async createCategory(body: CategoryI): Promise<Category> {
        const { name_category } = body;

        const allCategories: Category[] = await this.findAllCategories();
        const filterCategory: Category | undefined = allCategories.find(
            (category: Category) =>
                category.dataValues.name_category === name_category
        );
        if (filterCategory != null) {
            throw Boom.conflict('La categoria ya se encuentra registrada');
        }
        else {
            return await Category.create({ ...body });
        }
    }

    async updateCategory(body: CategoryI, id: string): Promise<Category> {
        const category: Category | null = await this.findCategoryById(id);
        return await category.update(body);
    }
}

export { CategoryService };
