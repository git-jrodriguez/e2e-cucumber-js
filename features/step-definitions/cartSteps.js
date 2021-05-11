
const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const homePage = require('../pages/homePage.page');
const productPage = require('../pages/productPage.page');
const cartPage = require('../pages/cartPage.page');


When('El usuario selecciona el producto {string}', async (laptopName) => {
    await homePage.clickOnLaptopFilter();
    await homePage.selectProduct(laptopName);
})

When('El usuario agrega el producto al carrito', async () => {
    await productPage.addToCart();
})

When('El usuario ingresa al carrito', async () => {
    await homePage.clickOnCartButton();
})

Then('El carrito debe mostrar la Laptop {string}', async (laptopName) => {
    expect(await cartPage.isProductAdded(laptopName)).to.be.true

})