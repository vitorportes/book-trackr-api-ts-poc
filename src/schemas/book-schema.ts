import Joi from "joi";

export const bookSchema = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
  publisher: Joi.string().required(),
  genre: Joi.string().required(),
  year: Joi.number().required(),
});
