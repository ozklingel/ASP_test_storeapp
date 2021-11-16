//Load the base configuration
var baseConfig = require("./karma.conf.js");
module.exports = function (config) {
  // Load base config
  baseConfig(config);
  // Override base config
  config.set({
    singleRun: true, 
    browsers: ["RemoteChrome"],
    hostname: "karma",
    customLaunchers: {
      "RemoteChrome": {
        base: "WebDriver",
        "goog:chromeOptions": {
          args: ["--window-size=1360,1020", "--headless", "--disable-gpu", "--disable-dev-shm-usage"]
        },
        config: {
          hostname: "selenium",
          port: 4444
        },
        browserName: 'chrome',
        name: "karma",
        pseudoActivityInterval: 30000
      }
    }
  });
  
}
