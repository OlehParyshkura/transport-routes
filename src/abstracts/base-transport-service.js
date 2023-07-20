class BaseTransportService {
  getTransports(skip, limit) {
    throw new Error('Not implemented');
  }

  async getTransportCount() {
    throw new Error('Not implemented');
  }

  async getTransportById(transportId) {
    throw new Error('Not implemented');
  }

  async getTransportByLicencePlate(licensePlate) {
    throw new Error('Not implemented');
  }

  async createTransport(transportData) {
    throw new Error('Not implemented');
  }

  async deleteTransport(transportId) {
    throw new Error('Not implemented');
  }

  async updateTransport(transportId, updatedTransportData) {
    throw new Error('Not implemented');
  }
}

module.exports = BaseTransportService;
