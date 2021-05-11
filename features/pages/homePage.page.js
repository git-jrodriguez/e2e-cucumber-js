const { By, until } = require('selenium-webdriver');
var BasePage = require('./basePage.page');
class HomePage extends BasePage {

    getSignUpButton = () => driver.findElement(By.id('signin2'))
    getLoginButton  = () => driver.findElement(By.id('login2'))
    getWelcomeElement = () => driver.findElement(By.id("nameofuser"))
    getLogoutButton = () => driver.findElement(By.id("logout2"))
    getCartButton = () => driver.findElement(By.id("cartur"))
    getLaptopFilterButton = () => driver.findElement(By.css("a[onClick=\"byCat('notebook')\"]"))
    getProductElement = (productName) => driver.findElement(By.xpath(`//a[text()='${productName}']`))


    clickOnSignupButton = async () => {
        const signUpButton = await this.getSignUpButton();
        await driver.wait(until.elementIsVisible(signUpButton), 5000);
        await signUpButton.click();
    }

    clickOnLoginButton = async () => {
        const loginButton = await this.getLoginButton();
        await driver.wait(until.elementIsVisible(loginButton), 5000);
        await loginButton.click();
    }

    clickOnLogoutButton = async () => {
        const logoutButton = await this.getLogoutButton();
        await driver.wait(until.elementIsVisible(logoutButton), 5000);
        await logoutButton.click();
    }

    clickOnLaptopFilter = async () => {
        const laptops = await this.getLaptopFilterButton();
        await driver.wait(until.elementIsVisible(laptops), 5000);
        await laptops.click();
    }

    selectProduct = async (productName) => {
        const product = await this.getProductElement(productName);
        await driver.wait(until.elementIsEnabled(product), 5000);
        await product.click();
    }

    clickOnCartButton = async () => {
        const cartButton = await this.getCartButton();
        await driver.wait(until.elementLocated(By.id("cartur")), 5000);
        await cartButton.click();
    }
}
module.exports = new HomePage();