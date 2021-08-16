const {Builder, By, Key, until} = require("selenium-webdriver");
let BasePage = require("../pages/basepage");
let webdriver = require("selenium-webdriver");


class HomePage extends BasePage{
    perform_search(textToSearch){
        //fill search field
        driver.findElement(By.name("q")).sendKeys(textToSearch);
        //press enter
        driver.findElement(By.name("q")).sendKeys(Key.ENTER);
    }
}

module.exports = new HomePage();