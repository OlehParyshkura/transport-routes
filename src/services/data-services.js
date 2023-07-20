class DataServices {
  constructor({ routeRepository, transportRepository }) {
    this.routeRepository = routeRepository;
    this.transportRepository = transportRepository;
  }
}

module.exports = DataServices;
