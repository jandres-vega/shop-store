import joi from 'joi';

const id:joi.StringSchema = joi.string().uuid();
const full_name:joi.StringSchema = joi.string();
const email:joi.StringSchema =joi.string().email();
const cellphone:joi.StringSchema = joi.string();
const isAdmin:joi.BooleanSchema = joi.boolean();
const picture:joi.StringSchema  = joi.string().uri();
const password:joi.StringSchema  = joi.string();

const schemaCreateUser:joi.ObjectSchema = joi.object({
    full_name : full_name.required(),
    email: email.required(),
    cellphone: cellphone.required(),
    password: password.required(),
    isAdmin: isAdmin,
    picture: picture
});

export { schemaCreateUser };