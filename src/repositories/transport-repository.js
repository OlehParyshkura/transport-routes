const BaseTransportRepository = require('../abstracts/base-transport-repository');

class TransportRepository extends BaseTransportRepository {
  constructor({ prismaService }) {
    super();
    this.prisma = prismaService;
  }

  async getTransports(skip, limit) {
    return this.prisma.transport.findMany({
      skip: skip,
      take: limit,
    });
  }

  async getTransportCount() {
    return this.prisma.transport.count();
  }

  async getTransportById(transportId) {
    return this.prisma.transport.findUnique({ where: { id: transportId } });
  }

  async getTransportByLicencePlate(licensePlate) {
    return this.prisma.transport.findUnique({
      where: { licensePlate: licensePlate },
    });
  }

  async createTransport(transportData) {
    return this.prisma.transport.create({ data: transportData });
  }

  async deleteTransport(transportId) {
    return this.prisma.transport.delete({ where: { id: transportId } });
  }

  async updateTransport(transportId, updatedTransportData) {
    return this.prisma.transport.update({
      where: { id: transportId },
      data: updatedTransportData,
    });
  }
}

module.exports = TransportRepository;
