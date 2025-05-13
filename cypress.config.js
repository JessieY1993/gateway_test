module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      const env = process.env.TEST_ENV || 'dev';
      config.env = {
        ...config.env
      };

      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });
      
      return config;
    },
    // specPattern: 'cypress/e2e/**/*.cy.js',
    specPattern: 'cypress/e2e/service/add_service.cy.js',
    supportFile: 'cypress/support/e2e.js',
    video: true,
    videoCompression: 32,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: true,
      json: true,
      reportFilename: "gateway-report"
    }
  }
};
