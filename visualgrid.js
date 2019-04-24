'use strict';

require('chromedriver'); // eslint-disable-line node/no-unpublished-require
const { Builder, Capabilities, By } = require('selenium-webdriver');
const { Eyes, VisualGridRunner, Target, FileLogHandler, ConsoleLogHandler, Configuration, BrowserType, DeviceName, ScreenOrientation } = require('@applitools/eyes-selenium'); // should be replaced to '@applitools/eyes-selenium'

(async () => {
  // Open a Chrome browser.
  const driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

  // Initialize the eyes SDK and set your private API key.
  const eyes = new Eyes(new VisualGridRunner());

  //eyes.setLogHandler(new ConsoleLogHandler(true));
  eyes.setLogHandler(new FileLogHandler(true));

  try {
    const configuration = new Configuration();
    configuration.setConcurrentSessions(100);
    configuration.setAppName('Hello World');
    configuration.setTestName('Hello World');

    configuration.addBrowser(1200, 800, BrowserType.CHROME);
    
    configuration.addBrowser(1200, 800, BrowserType.FIREFOX);
    configuration.addBrowser(1200, 800, BrowserType.IE);
    configuration.addBrowser(1200, 800, BrowserType.EDGE);

    configuration.addBrowser(1400, 800, BrowserType.CHROME);
    configuration.addBrowser(1400, 800, BrowserType.FIREFOX);
    configuration.addBrowser(1400, 800, BrowserType.IE);
    configuration.addBrowser(1400, 800, BrowserType.EDGE);

    configuration.addBrowser(1600, 800, BrowserType.CHROME);
    configuration.addBrowser(1600, 800, BrowserType.FIREFOX);
    configuration.addBrowser(1600, 800, BrowserType.IE);
    configuration.addBrowser(1600, 800, BrowserType.EDGE);

    configuration.addBrowser(1800, 800, BrowserType.CHROME);
    configuration.addBrowser(1800, 800, BrowserType.FIREFOX);
    configuration.addBrowser(1800, 800, BrowserType.IE);
    configuration.addBrowser(1800, 800, BrowserType.EDGE);

    configuration.addBrowser(1900, 800, BrowserType.CHROME);
    configuration.addBrowser(1900, 800, BrowserType.FIREFOX);
    configuration.addBrowser(1900, 800, BrowserType.IE);
    configuration.addBrowser(1900, 800, BrowserType.EDGE);

    configuration.addBrowser(2000, 800, BrowserType.CHROME);
    configuration.addBrowser(2000, 800, BrowserType.FIREFOX);
    configuration.addBrowser(2000, 800, BrowserType.IE);
    configuration.addBrowser(2000, 800, BrowserType.EDGE);
    
    configuration.addBrowser(2000, 1000, BrowserType.CHROME);
    configuration.addBrowser(2000, 1000, BrowserType.FIREFOX);
    configuration.addBrowser(2000, 1000, BrowserType.IE);
    configuration.addBrowser(2000, 1000, BrowserType.EDGE);

    configuration.addDeviceEmulation(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);
    configuration.addDeviceEmulation(DeviceName.iPad_Pro, ScreenOrientation.PORTRAIT);
    configuration.addDeviceEmulation(DeviceName.Nexus_6, ScreenOrientation.PORTRAIT);
    configuration.addDeviceEmulation(DeviceName.Nexus_7, ScreenOrientation.PORTRAIT);

    eyes.setConfiguration(configuration);

    await eyes.open(driver);

    await driver.get('https://applitools.com/helloworld');

    await eyes.check('Hello World!', Target.window().fully());

    // eyes.close is called in getAllResults
    const results = await eyes.getRunner().getAllResults();
    console.log(results);
    await driver.quit();
  } catch {
    // Close the browser.
    await driver.quit();

    // If the test was aborted before eyes.close was called ends the test as aborted.
    await eyes.abortIfNotClosed();
  }
})();