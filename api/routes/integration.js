const IntegrationController = require('../modules/integration/integration-controller');

const routesForIntegration = app => {
  app.post('/integration/webhooks', IntegrationController.webhooks);
};

module.exports = routesForIntegration;
