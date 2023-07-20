const Joi = require('joi');

class CommonValidator {
  _idSchema = Joi.number().integer().positive().required();

  _pageLimitSchema = Joi.object({
    page: Joi.number().integer().default(1),
    limit: Joi.number().integer().default(10),
  });

  validateId(id) {
    return this._idSchema.validate(id);
  }

  validatePageLimit(data) {
    return this._pageLimitSchema.validate(data);
  }
}

module.exports = CommonValidator;
