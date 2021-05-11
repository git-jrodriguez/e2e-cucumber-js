
const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const homePage = require('../pages/homePage.page');
const loginPage = require('../pages/loginPage.page');


When('El usuario abre el modal para loguearse', async () => {
    await homePage.clickOnLoginButton();
})

When('Ingresa el usuario registrado {string}', async (usuario) => {
    await loginPage.enterUser(usuario);
    expect(await loginPage.getUserField().getAttribute("value")).to.contain(usuario);
})

When('Ingresa su password registrado {string}', async (password) => {
    await loginPage.enterPassword(password);
})

When('Hace click en Login', async () => {
    await loginPage.clickSignIn();
})

Then('El usuario debe aparecer logueado', async () => {
    const loginModal = await loginPage.getLoginModal()
    expect(loginModal).not.to.have.property('show');

    const logoutButton = await homePage.getLogoutButton();
    expect(logoutButton).to.exist;
})

Given('Un usuario se loguea con usuario {string} y password {string}', async (usuario, password) => {
    await homePage.clickOnLoginButton();
    await loginPage.enterUser(usuario);
    await loginPage.enterPassword(password);
    await loginPage.clickSignIn();
    await driver.wait(() => {
        return homePage.getWelcomeElement().getText().then(function (text) {
            return text.includes(usuario);
        })
    }, 5000);
})

When('El usuario hace click en sign out', async () => {
    await homePage.clickOnLogoutButton();
})

Then('El usuario debe aparecer deslogueado', async () => {
    const loginButton = await homePage.getLoginButton();
    expect(loginButton).to.exist;
})