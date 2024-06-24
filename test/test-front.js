const { Builder, By, Browser } = require("selenium-webdriver");
var assert = require('assert');

describe("Selenium tests", function() {
    this.timeout(30000);
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get("http://127.0.0.1:3333");
    });

    after(async function () {
        await driver.close();
    });

    it("should have the correct page title", async function() {
        const pageTitle = await driver.getTitle();
        assert.strictEqual(pageTitle, "Calculatrice");
    });

    it('should have the correct result of a calcul', async function() {
        await driver.findElement(By.id("number1")).click();
        await driver.findElement(By.id("sum")).click();
        await driver.findElement(By.id("number1")).click();
        await driver.findElement(By.id("equal")).click();

        const result = await driver.findElement(By.id("display")).getText();
        assert.strictEqual(result, "2");
    });
});