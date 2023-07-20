const Joi = require('joi');

class RouteValidator {
  _schema = Joi.object({
    id: Joi.number().optional(),
    startCity: Joi.string().required(),
    endCity: Joi.string().required(),
    distance: Joi.number().positive().required(),
    departureDate: Joi.date().required(),
    completionDate: Joi.date().required(),
    requiredTransport: Joi.string().valid('CARGO', 'PASSENGER').required(),
    expectedRevenue: Joi.number().integer().positive().required(),
    transportId: Joi.number().integer().optional().allow(null),
    status: Joi.string()
      .valid('PENDING', 'IN_PROGRESS', 'COMPLETED')
      .required(),
  });

  _optionalSchema = this._schema.fork(
    Object.keys(this._schema.describe().keys),
    (item) => item.optional()
  );

  validate(routeData, isUpdate = false) {
    if (isUpdate) {
      return this._optionalSchema.validate(routeData);
    }
    return this._schema.validate(routeData);
  }
}

module.exports = RouteValidator;
