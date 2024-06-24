const { Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");

(async function helloSelenium() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    await driver.get("http://localhost:5500");

    const pageTitle = await driver.getTitle();
    assert.strictEqual(pageTitle, "Calculatrice");

    await driver.findElement(By.name("login")).click();

    await driver.quit();
})();