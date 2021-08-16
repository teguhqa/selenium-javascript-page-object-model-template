const {Builder, By, Key, until} = require("selenium-webdriver");
let BasePage = require("./basepage");
let webdriver = require("selenium-webdriver");


class HomePage extends BasePage{

    fill_username(username){
        driver.findElement(By.id("txtUsername")).sendKeys(username);
    }
    fill_password(password){
        driver.findElement(By.id("txtPassword")).sendKeys(password);
    }
    click_login_button(){
        driver.findElement(By.id("btnLogin")).click();
    }
}

module.exports = new HomePage();