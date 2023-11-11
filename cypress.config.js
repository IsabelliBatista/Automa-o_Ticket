const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "vmuo4f",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.ticket.com.br',
    includeShadowDom: true,
    numTestsKeptInMemory: 10,
    redirectionLimit: 20,
    experimentalMemoryManagement: true
  },
  chromeWebSecurity: false,
  headed: false
});
