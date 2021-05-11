const {Before, After, AfterAll} = require('cucumber');

Before(async function() {
  return driver.manage().window().maximize();
});

AfterAll(async function() {
  return driver.quit();
});