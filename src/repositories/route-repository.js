const BaseRouteRepository = require('../abstracts/base-route-repository');

class RouteRepository extends BaseRouteRepository {
  constructor({ prismaService }) {
    super();
    this.prisma = prismaService;
  }

  async getRoutes(skip, limit) {
    return this.prisma.route.findMany({
      skip: skip,
      take: limit,
    });
  }

  async getRouteCount() {
    return this.prisma.route.count();
  }

  async getRouteById(routeId) {
    return this.prisma.route.findUnique({ where: { id: routeId } });
  }

  async createRoute(routeData) {
    return this.prisma.route.create({ data: routeData });
  }

  async deleteRoute(routeId) {
    return this.prisma.route.delete({ where: { id: routeId } });
  }

  async updateRoute(routeId, updatedRouteData) {
    return this.prisma.route.update({
      where: { id: routeId },
      data: updatedRouteData,
    });
  }
}

module.exports = RouteRepository;
