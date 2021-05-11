const { By, until } = require('selenium-webdriver');
const moment = require('moment');
var BasePage = require('../pages/basePage.page');

class SignupPage extends BasePage {

    getUserField = () => driver.findElement(By.id('sign-username'));
    getPasswordField = () => driver.findElement(By.id('sign-password'));
    getSignUpButton = () => driver.findElement(By.css("button[onClick='register()']"));

    enterUser = async (usuario) => {
        const usernameWithDate = usuario + moment().format('DD-MM-YYY HH:mm:ss');
        const userField = await this.getUserField();
        await driver.wait(until.elementIsVisible(userField), 5000);
        await userField.clear();
        await userField.sendKeys(usernameWithDate);
        await driver.wait(function () {
            return userField.getAttribute("value").then(function (text) {
                return text === usernameWithDate;
            })
        }, 5000);
    }

    enterPassword = async (password) => {
        const passwordField = await this.getPasswordField()
        await driver.wait(until.elementIsVisible(passwordField), 5000);
        await passwordField.clear();
        await passwordField.sendKeys(password);
        await driver.wait(() => {
            return passwordField.getAttribute("value").then(function (text) {
                return text === password;
            })
        }, 5000);
    }

    clickSignUp = async () => {
        const signupButton = await this.getSignUpButton()
        await driver.wait(until.elementIsVisible(signupButton), 5000);
        await signupButton.click();
    }
}
module.exports = new SignupPage();
