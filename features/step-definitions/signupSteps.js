
const { When, Then } = require('@cucumber/cucumber');
const { until } = require('selenium-webdriver');
const { expect } = require('chai');
const homePage = require('../pages/homePage.page');
const signupPage = require('../pages/signupPage.page');


When('El usuario abre el modal para registrarse', async () => {
   await homePage.clickOnSignupButton();
})

When('Ingresa el usuario {string} + DD-MM-YYYY MM:SS', async (usuario) => {
    await signupPage.enterUser(usuario);
})

When('Ingresa su password {string}', async (password) => {
    await signupPage.enterPassword(password);
})

When('Hace click en Sign up', async () => {
    await signupPage.clickSignUp();
})

Then('El modal debe indicar que el registro se ha completado', async () => {
    await driver.wait(until.alertIsPresent());
    const registrationAlert = await driver.switchTo().alert();
    const alertText = await registrationAlert.getText();
    expect(alertText).to.equal("Sign up successful.");
    registrationAlert.accept();
})
