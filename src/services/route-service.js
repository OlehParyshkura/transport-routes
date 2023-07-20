const BaseRouteService = require('../abstracts/base-route-service');

class RouteService extends BaseRouteService {
  constructor({ dataServices }) {
    super();
    this.dataServices = dataServices;
  }

  async getRoutes(skip, limit) {
    return this.dataServices.routeRepository.getRoutes(skip, limit);
  }

  async getRouteCount() {
    return this.dataServices.routeRepository.getRouteCount();
  }

  async getRouteById(routeId) {
    return this.dataServices.routeRepository.getRouteById(routeId);
  }

  async createRoute(routeData) {
    return this.dataServices.routeRepository.createRoute(routeData);
  }

  async deleteRoute(routeId) {
    return this.dataServices.routeRepository.deleteRoute(routeId);
  }

  async updateRoute(routeId, updatedRouteData) {
    return this.dataServices.routeRepository.updateRoute(
      routeId,
      updatedRouteData
    );
  }
}

module.exports = RouteService;
