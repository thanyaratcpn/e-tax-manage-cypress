const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: "",
  screenshotOnRunFailure: true,
  video: false,
  viewportWidth: 1600,
  viewportHeight: 900,
  
  e2e: {
    // specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    specPattern: "**/*.feature",
    
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },

})

