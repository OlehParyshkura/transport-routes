const express = require('express');
const serverless = require('serverless-http');

const PrismaService = require('./src/services/prisma-service');

const RouteRepository = require('./src/repositories/route-repository');
const TransportRepository = require('./src/repositories/transport-repository');

const DataServices = require('./src/services/data-services');
const RouteService = require('./src/services/route-service');
const TransportService = require('./src/services/transport-service');

const RouteValidator = require('./src/validators/route-validator');
const TransportValidator = require('./src/validators/transport-validator');
const CommonValidator = require('./src/validators/common-validator');

const RouteController = require('./src/controllers/route-controller');
const TransportController = require('./src/controllers/transport-controller');

const errorMiddleware = require('./src/midlewares/errorMidleware');

const prismaService = new PrismaService();
const routeRepository = new RouteRepository({ prismaService });
const transportRepository = new TransportRepository({ prismaService });

const dataServices = new DataServices({ routeRepository, transportRepository });
const routeService = new RouteService({ dataServices });
const transportService = new TransportService({ dataServices });

const routeValidator = new RouteValidator();
const transportValidator = new TransportValidator();
const commonValidator = new CommonValidator();

const routeController = new RouteController({
  routeService,
  routeValidator,
  commonValidator,
});
const transportController = new TransportController({
  transportService,
  transportValidator,
  commonValidator,
});

const app = express();

app.use(express.json());

app.get('/routes', routeController.getRoutes);
app.get('/routes/:id', routeController.getRouteById);
app.post('/routes', routeController.createRoute);
app.delete('/routes/:id', routeController.deleteRoute);
app.patch('/routes/:id', routeController.updateRoute);

app.get('/transports', transportController.getTransports);
app.get('/transports/:id', transportController.getTransportById);
app.get(
  '/transports-by-license-plate/:licensePlate',
  transportController.getTransportByLicencePlate
);
app.post('/transports', transportController.createTransport);
app.delete('/transports/:id', transportController.deleteTransport);
app.patch('/transports/:id', transportController.updateTransport);

app.use(errorMiddleware);

module.exports.handler = serverless(app);
