module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      const env = process.env.TEST_ENV || 'dev';
      config.env = {
        ...config.env
      };

      on('task', {
        log(message) {
          console.log(message); // 将日志输出到 Node 终端
          return null;
        }
      });
      
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    // 视频和截图配置
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
