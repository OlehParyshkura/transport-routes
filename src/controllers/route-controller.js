const BaseRouteController = require('../abstracts/base-route-controller');

class RouteController extends BaseRouteController {
  constructor({ routeService, routeValidator, commonValidator }) {
    super();
    this.routeService = routeService;
    this.routeValidator = routeValidator;
    this.commonValidator = commonValidator;
  }

  getRoutes = async (req, res, next) => {
    try {
      const {
        value: { page, limit },
        error,
      } = this.commonValidator.validatePageLimit(req.query);
      if (error) {
        return res.status(400).json(error);
      }
      const skip = (page - 1) * limit;

      const routes = await this.routeService.getRoutes(skip, limit);
      const totalCount = await this.routeService.getRouteCount();

      const totalPages = Math.ceil(totalCount / limit);
      const hasNextPage = page < totalPages;
      const hasPreviousPage = page > 1;

      res.json({
        routes,
        currentPage: page,
        totalPages,
        hasNextPage,
        hasPreviousPage,
      });
    } catch (error) {
      next(error);
    }
  };

  getRouteById = async (req, res, next) => {
    try {
      const { value: routeId, error } = this.commonValidator.validateId(
        req.params.id
      );
      if (error) {
        return res.status(400).json(error);
      }

      const route = await this.routeService.getRouteById(routeId);

      res.json(route);
    } catch (error) {
      next(error);
    }
  };

  createRoute = async (req, res, next) => {
    try {
      const routeData = req.body;
      const { value: validRouteData, error } =
        this.routeValidator.validate(routeData);
      if (error) {
        return res.status(400).json(error);
      }
      const createdRoute = await this.routeService.createRoute(validRouteData);
      res.status(201).json(createdRoute);
    } catch (error) {
      next(error);
    }
  };

  deleteRoute = async (req, res, next) => {
    try {
      const { value: routeId, error } = this.commonValidator.validateId(
        req.params.id
      );
      if (error) {
        return res.status(400).json(error);
      }
      await this.routeService.deleteRoute(routeId);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };

  updateRoute = async (req, res, next) => {
    try {
      const { value: routeId, error: idError } =
        this.commonValidator.validateId(req.params.id);
      if (idError) {
        return res.status(400).json(idError);
      }
      const updatedRouteData = req.body;
      const { value: validUpdatedRouteData, error: routeDataError } =
        this.routeValidator.validate(updatedRouteData, true);
      if (routeDataError) {
        return res.status(400).json(routeDataError);
      }
      await this.routeService.updateRoute(routeId, validUpdatedRouteData);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = RouteController;
