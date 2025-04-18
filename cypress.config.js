const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on); // register the reporter
    },
    baseUrl: 'https://www.saucedemo.com/v1/', // Optional: set your base URL
    specPattern: 'cypress/e2e/**/*.cy.js'
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    charts: true
  },
  screenshotsFolder: 'cypress/screenshots',
  video: false
});
