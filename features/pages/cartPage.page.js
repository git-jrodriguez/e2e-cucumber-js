const { By } = require('selenium-webdriver');
var BasePage = require('./basePage.page');

class CartPage extends BasePage {

    isProductAdded = async (productName) => {
        let isAdded = false;
        const rows = await driver.findElements(By.css("tr.success"))
        for (let row of rows)
            if ((await row.getText()).includes(productName)) isAdded = true
        return isAdded
    }

}
module.exports = new CartPage();