const BaseTransportController = require('../abstracts/base-transport-controller');

class TransportController extends BaseTransportController {
  constructor({ transportService, transportValidator, commonValidator }) {
    super();
    this.transportService = transportService;
    this.transportValidator = transportValidator;
    this.commonValidator = commonValidator;
  }

  getTransports = async (req, res, next) => {
    try {
      const {
        value: { page, limit },
        error,
      } = this.commonValidator.validatePageLimit(req.query);
      if (error) {
        return res.status(400).json(error);
      }
      const skip = (page - 1) * limit;

      const transports = await this.transportService.getTransports(skip, limit);
      const totalCount = await this.transportService.getTransportCount();

      const totalPages = Math.ceil(totalCount / limit);
      const hasNextPage = page < totalPages;
      const hasPreviousPage = page > 1;

      res.json({
        transports,
        currentPage: page,
        totalPages,
        hasNextPage,
        hasPreviousPage,
      });
    } catch (error) {
      next(error);
    }
  };

  getTransportById = async (req, res, next) => {
    try {
      const { value: transportId, error } = this.commonValidator.validateId(
        req.params.id
      );
      if (error) {
        return res.status(400).json(error);
      }
      const transport = await this.transportService.getTransportById(
        transportId
      );

      res.json(transport);
    } catch (error) {
      next(error);
    }
  };

  getTransportByLicencePlate = async (req, res, next) => {
    try {
      const licensePlate = req.params.licensePlate;
      if (!licensePlate) {
        return res.status(400);
      }
      const transport = await this.transportService.getTransportByLicencePlate(
        licensePlate
      );

      res.json(transport);
    } catch (error) {
      next(error);
    }
  };

  createTransport = async (req, res, next) => {
    try {
      const transportData = req.body;
      const { value: validTransportData, error } =
        this.transportValidator.validate(transportData);
      if (error) {
        return res.status(400).json(error);
      }
      const createdTransport = await this.transportService.createTransport(
        validTransportData
      );
      res.status(201).json(createdTransport);
    } catch (error) {
      next(error);
    }
  };

  deleteTransport = async (req, res, next) => {
    try {
      const { value: transportId, error } = this.commonValidator.validateId(
        req.params.id
      );
      if (error) {
        return res.status(400).json(error);
      }
      await this.transportService.deleteTransport(transportId);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };

  updateTransport = async (req, res, next) => {
    try {
      const { value: transportId, error: idError } =
        this.commonValidator.validateId(req.params.id);
      if (idError) {
        return res.status(400).json(idError);
      }
      const updatedTransportData = req.body;

      const { value: validTransportData, error: transportDataError } =
        this.transportValidator.validate(updatedTransportData, true);
      if (transportDataError) {
        return res.status(400).json(transportDataError);
      }

      await this.transportService.updateTransport(
        transportId,
        validTransportData
      );
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = TransportController;
