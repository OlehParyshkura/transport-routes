const BaseTransportService = require('../abstracts/base-transport-service');

class TransportService extends BaseTransportService {
  constructor({ dataServices }) {
    super();
    this.dataServices = dataServices;
  }

  async getTransports(skip, limit) {
    return this.dataServices.transportRepository.getTransports(skip, limit);
  }

  async getTransportCount() {
    return this.dataServices.transportRepository.getTransportCount();
  }

  async getTransportById(transportId) {
    return this.dataServices.transportRepository.getTransportById(transportId);
  }

  async getTransportByLicencePlate(licensePlate) {
    return this.dataServices.transportRepository.getTransportByLicencePlate(
      licensePlate
    );
  }

  async createTransport(transportData) {
    return this.dataServices.transportRepository.createTransport(transportData);
  }

  async deleteTransport(transportId) {
    return this.dataServices.transportRepository.deleteTransport(transportId);
  }

  async updateTransport(transportId, updatedTransportData) {
    return this.dataServices.transportRepository.updateTransport(
      transportId,
      updatedTransportData
    );
  }
}

module.exports = TransportService;
