const { Builder, By, Browser } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
var assert = require('assert');

describe("Selenium tests", function() {
    // this.timeout(30000);
    let driver;

    before(async function () {
        let chromeOptions = new chrome.Options();
        chromeOptions.addArguments("--headless");
        chromeOptions.addArguments("--no-sandbox");
        chromeOptions.addArguments("--disable-dev-shm-usage");
    
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(chromeOptions).build();
    });

    after(async function () {
        await driver.close();
    });

    it("should have the correct page title", async function() {
        await driver.get("http://127.0.0.1:3333");
        const pageTitle = await driver.getTitle();
        assert.strictEqual(pageTitle, "Calculatrice");
    });

    it('should have the correct result of a calcul 1+1', async function() {
        await driver.get("http://127.0.0.1:3333");
        await driver.findElement(By.id("number1")).click();
        await driver.findElement(By.id("sum")).click();
        await driver.findElement(By.id("number1")).click();
        await driver.findElement(By.id("equal")).click();

        const result = await driver.findElement(By.id("display")).getText();
        assert.strictEqual(result, "2");
    });

    it('should have the correct result of a calcul 38*67-18/30', async function() {
        await driver.get("http://127.0.0.1:3333");

        await driver.findElement(By.id("number3")).click();
        await driver.findElement(By.id("number8")).click();
        await driver.findElement(By.id("multiplicate")).click();
        await driver.findElement(By.id("number6")).click();
        await driver.findElement(By.id("number7")).click();
        await driver.findElement(By.id("minus")).click();
        await driver.findElement(By.id("number1")).click();
        await driver.findElement(By.id("number8")).click();
        await driver.findElement(By.id("divisor")).click();
        await driver.findElement(By.id("number3")).click();
        await driver.findElement(By.id("number0")).click();
        await driver.findElement(By.id("equal")).click();

        const result = await driver.findElement(By.id("display")).getText();
        assert.strictEqual(result, "84.27");
    });
});