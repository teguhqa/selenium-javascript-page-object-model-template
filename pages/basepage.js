let webdriver = require("selenium-webdriver");
let assert = require("assert");
let driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({implicit:(10000)});

class BasePage{
    constructor(){
        global.driver = driver;
    }

    assert_equal(actual,expectation){
        assert.equal(actual,expectation);
    }

    open_url(url){
        driver.get(url);
    }

    close_driver(){
        driver.close;
    }

    quit_driver(){
        driver.quit;
    }

    is_alert_displayed(){
        driver.wait(until.alertIsPresent());
    }

    switch_to_alert(){
        driver.switchTo().alert();
    }

    get_alert_text(alert){
        alert.getText();
    }

    accept_alert(alert){
        alert.accept();
    }

    dismiss_alert(alert){
        alert.dismiss();
    }

    write_alert_message(alert,message){
        alert.sendKeys(message);
    }

    get_url(){
        driver.getCurrentUrl();
    }

    go_back(){
        driver.navigate().back();
    }

    go_forward(){
        driver.navigate().forward();
    }

    refresh_page(){
        driver.navigate().refresh();
    }

    get_title(){
        driver.getTitle();
    }

    get_window_handle(){
        driver.getWindowHandle();
    }

    new_tab_and_switch(){
        driver.switchTo().newWindow('tab');
    }

    new_window_and_switch(){
        driver.switchTo().newWindow('window');
    }

    close_tab(){
        driver.close();
    }

    close_window(){
        driver.close();
    }

    switch_to_old_tab(){
        driver.switchTo().window(originalWindow);
    }

    switch_to_old_window(){
        driver.switchTo().window(originalWindow);
    }

    switch_to_iframe_using_css(selector){
        const iframe = driver.findElement(By.css(selector));
        driver.switchTo().frame(iframe);
    }

    switch_to_iframe_using_id(selector){
        const iframe = driver.findElement(By.id(selector));
        driver.switchTo().frame(iframe);
    }

    switch_to_iframe_put_id(id){
        driver.switchTo().frame(id);
    }

    switch_to_iframe_put_name(name){
        driver.switchTo().frame(name);
    }

    switch_to_iframe_put_index(index){
        driver.switchTo().frame(index);
    }

    leave_from_frame(){
        driver.switchTo().defaultContent();
    }

    get_window_witdh(){
        driver.manage().window().getRect().width;
    }

    get_windows_height(){
        driver.manage().window().getRect().height;
    }

    get_windows_size(){
        driver.manage().window().getRect();
    }

    set_windows_size(witdh_in_px,height_in_px){
        driver.manage().window().setRect({ width: witdh_in_px, height: height_in_px });
    }

    get_top_left_window_x(){
        driver.manage().window().getRect().x;
    }

    get_top_left_window_y(){
        driver.manage().window().getRect().y;
    }

    move_windows_by_top_left(x,y){
        driver.manage().window().setRect({ x: x, y: y });
    }

    maximize_windows(){
        driver.manage().window().maximize();
    }

    minimize_windows(){
        driver.manage().window().minimize(); 
    }

    fullscreen_windows(){
        driver.manage().window().fullscreen();
    }

    find_above_element_by_id(id,tag_name){
        const elemen = driver.findElement(By.id(id));
        driver.findElement(withTagName(tag_name).above(elemen));
    }

    find_below_element_by_id(id,tag_name){
        const elemen = driver.findElement(By.id(id));
        driver.findElement(withTagName(tag_name).below(elemen));
    }

    find_left_element_by_id(id,tag_name){
        const elemen = driver.findElement(By.id(id));
        driver.findElement(withTagName(tag_name).toLeftOf(elemen));
    }

    find_right_element_by_id(id,tag_name){
        const elemen = driver.findElement(By.id(id));
        driver.findElement(withTagName(tag_name).toRightOf(elemen));
    }

    find_near_element_by_id(id,tag_name){
        const elemen = driver.findElement(By.id(id));
        driver.findElement(withTagName(tag_name).near(elemen));
    }

    is_element_enabled(locator_by){
        driver.findElement(locator_by).isEnabled();
    }

    is_element_selected(locator_by){
        driver.findElement(locator_by).isSelected();
    }

    get_element_CSS_property(locator_by,CSS_value){
        driver.findElement(locator_by).getCssValue(CSS_value);
    }

    get_element_text(locator_by){
        driver.findElement(locator_by).getText();
    }

    clear_text(locator_by){
        let input = driver.findElement(locator_by);
        input.clear();
    }

    press_enter(locator_by){
        driver.findElement(locator_by).sendKeys(Key.ENTER);
    }

}

module.exports = BasePage;