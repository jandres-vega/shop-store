import Boom from '@hapi/boom';
import sequelize from '../libs/conexion';
import type { Product } from '../db/models/product.model';
import { SubCategory } from '../db/models/subCategory.model';
import type { ProductI } from '../types/modelsT/product';
import { SubCategoryService } from './subCategory.service';

const serviceSubCategory = new SubCategoryService();

class ProductService {
    async getAllProducts(): Promise<Product[]> {
        return await sequelize.models.Product.findAll({
            include: [
                {
                    model: SubCategory,
                    attributes: ['id', 'name_subCategory', 'image_SubCategory']
                }
            ]
        });
    }

    async getProductById(id: string): Promise<Product> {
        const findProduct: Product | null =
            await sequelize.models.Product.findByPk(id, {
                include: [
                    {
                        model: SubCategory
                    }
                ]
            });
        if (findProduct == null) {
            throw Boom.notFound('producto no encontrado');
        }
        return findProduct;
    }

    async createProduct(body: ProductI): Promise<Product> {
        const {
            name_product,
            image,
            SubCategoryId
        } = body;

        const productsAll: Product[] = await this.getAllProducts();

        const findProduct: Product | undefined = productsAll.find(
            (product: Product) => {
                return (
                    product.dataValues.name_product === name_product ||
                    product.dataValues.image === image
                );
            }
        );

        if (findProduct != null) {
            throw Boom.conflict('El producto ya se encuentra registrado');
        }
        else {
            await serviceSubCategory.findSubCategoryById(SubCategoryId);
            return await sequelize.models.Product.create({
                ...body
            });
        }
    }

    async deleteProduct(id: string): Promise<string> {
        const productFind: Product = await this.getProductById(id);
        const idProduct: string = id;
        await productFind.destroy();
        return `El producto con ID ${idProduct} fue eliminado correctamente`;
    }

    async updateProduct(id: string, body: Product): Promise<Product> {
        const productfInd: Product = await this.getProductById(id);
        return await productfInd.update(body);
    }
}

export { ProductService };
