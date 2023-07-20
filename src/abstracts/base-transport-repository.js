class BaseTransportRepository {
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

  createTransport(transportData) {
    throw new Error('Not implemented');
  }

  deleteTransport(transportId) {
    throw new Error('Not implemented');
  }

  updateTransport(transportId, updatedTransport) {
    throw new Error('Not implemented');
  }
}

module.exports = BaseTransportRepository;
