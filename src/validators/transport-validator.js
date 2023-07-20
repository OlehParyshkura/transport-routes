const Joi = require('joi');

class TransportValidator {
  _schema = Joi.object({
    id: Joi.number().optional(),
    licensePlate: Joi.string().required(),
    status: Joi.string().valid('AVAILABLE', 'BUSY').required(),
    model: Joi.string().required(),
    purchaseDate: Joi.date().required(),
    mileage: Joi.number().positive().required(),
    transportType: Joi.string().valid('CARGO', 'PASSENGER').required(),
  });

  _optionalSchema = this._schema.fork(
    Object.keys(this._schema.describe().keys),
    (item) => item.optional()
  );

  validate(transportData, isUpdate = false) {
    if (isUpdate) {
      return this._optionalSchema.validate(transportData);
    }
    return this._schema.validate(transportData);
  }
}

module.exports = TransportValidator;
