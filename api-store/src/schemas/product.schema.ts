import joi from 'joi';

const name_product: joi.StringSchema = joi.string();
const description: joi.StringSchema = joi.string().min(10);
const image: joi.StringSchema = joi.string().uri();
const stock: joi.NumberSchema = joi.number();
const price: joi.NumberSchema = joi.number();
const freeShopping: joi.BooleanSchema = joi.boolean();
const SubCategoryId: joi.StringSchema = joi.string();

const schemaProductCreate: joi.ObjectSchema = joi.object({
   name_product: name_product.required(),
   description: description.required(),
   image: image.required(),
   stock: stock.required(),
   price: price.required(),
   freeShopping,
   SubCategoryId: SubCategoryId.required()
});

const schemaProductUpdate: joi.ObjectSchema = joi.object({
   name_product,
   description,
   image,
   stock,
   price,
   freeShopping,
   SubCategoryId
});

const schemaProductId: joi.ObjectSchema = joi.object({
   id: joi.string().uuid().required()
});

export { schemaProductCreate, schemaProductUpdate, schemaProductId };
