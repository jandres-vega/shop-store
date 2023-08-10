import joi from 'joi';

const id = joi.string().uuid();
const name_category = joi.string();
const image_category = joi.string().uri();
const schemaCategory: joi.ObjectSchema = joi.object({
   name_category: name_category.required(),
   image_category: image_category.required()
});

const schemaCategoryUpdate: joi.ObjectSchema = joi.object({
   name_category,
   image_category
});

const schemaCategoryId: joi.ObjectSchema = joi.object({
   id: id.required()
});

export { schemaCategory, schemaCategoryId, schemaCategoryUpdate };
