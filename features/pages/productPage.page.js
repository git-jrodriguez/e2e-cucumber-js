const { By, until } = require('selenium-webdriver');
var BasePage = require('./basePage.page');

class ProductPage extends BasePage {

    getLogoutButton = () => driver.findElement(By.id("logout2"))
    getProductHeader = () => driver.findElement(By.id("logout2"))
    getAddToCartButton = () => driver.findElement(By.xpath("//a[text()='Add to cart']"))

    clickOnAddToCart = async () => {
        const addToCartButton = await this.getAddToCartButton();
        await driver.wait(until.elementIsVisible(addToCartButton), 5000);
        await addToCartButton.click();
    }

    addToCart = async () => {
        await this.clickOnAddToCart();
        await driver.wait(until.alertIsPresent());
        const registrationAlert = await driver.switchTo().alert();
        registrationAlert.accept();
    }

}
module.exports = new ProductPage();