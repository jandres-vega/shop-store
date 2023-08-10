import joi from 'joi';

const id: joi.StringSchema = joi.string().uuid();
const name_subCategory: joi.StringSchema = joi.string();
const image_SubCategory: joi.StringSchema = joi.string().uri();
const CategoryId: joi.StringSchema = joi.string().uuid();

const subCategorySchema: joi.ObjectSchema = joi.object({
   name_subCategory: name_subCategory.required(),
   image_SubCategory: image_SubCategory.required(),
   CategoryId: CategoryId.required()
});
const subCategoryUpdateSchema: joi.ObjectSchema = joi.object({
   name_subCategory,
   image_SubCategory,
   CategoryId
});
const subCategoryIdSchema: joi.ObjectSchema = joi.object({
   id: id.required()
});
export { subCategorySchema, subCategoryIdSchema, subCategoryUpdateSchema };
