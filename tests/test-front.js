const { Builder, By, Browser } = require("selenium-webdriver");
const assert = require("assert");
const path = require('node:path'); 

async function helloSelenium() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    await driver.get("http://127.0.0.1:8080");

    const pageTitle = await driver.getTitle();
    assert.strictEqual(pageTitle, "Calculatrice");

    await driver.findElement(By.id("number1")).click();
    await driver.findElement(By.id("sum")).click();
    await driver.findElement(By.id("number1")).click();
    await driver.findElement(By.id("equal")).click();

    const result = await driver.findElement(By.id("display")).getText();

    assert.strictEqual(result, "2");

    await driver.close();
};

module.exports = { helloSelenium };