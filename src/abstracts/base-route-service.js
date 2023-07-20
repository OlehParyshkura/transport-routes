class BaseRouteService {
  async getRoutes(skip, limit) {
    throw new Error('Not implemented');
  }

  async getRouteCount() {
    throw new Error('Not implemented');
  }

  async getRouteById(routeId) {
    throw new Error('Not implemented');
  }

  createRoute(routeData) {
    throw new Error('Not implemented');
  }

  deleteRoute(routeId) {
    throw new Error('Not implemented');
  }

  updateRoute(routeId, routeData) {
    throw new Error('Not implemented');
  }
}

module.exports = BaseRouteService;
