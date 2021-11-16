module.exports = function (config) {
  config.set({
    frameworks: ["ui5"],
    ui5: {
      url: "https://openui5.hana.ondemand.com"
    },
    

    browsers: ["Chrome", "Chrome_Beta_Headless"],

    customLaunchers: {
      Chrome_Beta_Headless: {
        base: 'Chrome',
        flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222']
      }
    },

    preprocessors: {
      '**/webapp/!(test|localService)/**/*.js': ['coverage']
    },
    coverageReporter: {
      includeAllSources: true,
      reporters: [
        {
          type: 'html',
          dir: './target/coverage'
        },
        {
          type: 'text'
        }
      ]
    },

    junitReporter: {
      outputDir: "./target/junit",
      outputFile: "TEST-qunit.xml",
      suite: "",
      useBrowserName: true
    },
    htmlReporter: {
      outputFile: './target/html/JUnit.html',

      // Optional
      pageTitle: 'Test Results',
      subPageTitle: 'Detailed test results for OPA 5',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true,
      showOnlyFailed: false
    },
    reporters: ['progress', 'coverage', 'junit', 'html']
  });
};
