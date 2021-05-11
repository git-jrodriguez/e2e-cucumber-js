
const { Given } = require('@cucumber/cucumber');
const homepage = require('../pages/homePage.page');

Given('Un usuario visita demoblaze', async () => {
    await homepage.goTo('https://www.demoblaze.com/index.html');
})

