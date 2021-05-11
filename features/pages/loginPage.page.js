const { By, until, ExpectedConditions } = require('selenium-webdriver');
var BasePage = require('../pages/basePage.page');
class LoginPage extends BasePage {

    getLoginModal = () => driver.findElement(By.id("logInModal"));
    getUserField = () => driver.findElement(By.id('loginusername'));
    getPasswordField = () => driver.findElement(By.id('loginpassword'));
    getSignInButton = () => driver.findElement(By.css("button[onClick='logIn()']"));

    enterUser = async (usuario) => {
        const userField = await this.getUserField()
        await driver.wait(until.elementIsEnabled(userField), 5000);
        await userField.sendKeys(usuario);
        await driver.wait(function () {
            return userField.getAttribute("value").then(function (text) {
                return text === usuario;
            })
        }, 5000);
    }

    enterPassword = async (password) => {
        const passwordField = await this.getPasswordField()
        await driver.wait(until.elementIsEnabled(passwordField), 5000);
        await passwordField.clear()
        await passwordField.sendKeys(password);
        await driver.wait(() => {
            return passwordField.getAttribute("value").then(function (text) {
                return text === password;
            })
        }, 5000);
    }

    clickSignIn = async () => {
        const signinButton = await this.getSignInButton()
        await driver.wait(until.elementIsEnabled(signinButton), 5000);
        await signinButton.click();
    }
}
module.exports = new LoginPage();
