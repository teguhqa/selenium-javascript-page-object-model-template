
const loginpage = require("../pages/loginpage");


describe("This is describe block",function(){
    this.timeout(50000);

    beforeEach("Setup Each",function(){
        //action performed before test
    });

    afterEach("Teardown Each",function(){
        loginpage.quit_driver;
    });

    it("Login Test1",function(){
        // test step here

        loginpage.open_url("https://opensource-demo.orangehrmlive.com/");
        loginpage.fill_username("Admin");
        loginpage.fill_password("admin123");
        loginpage.click_login_button();
        loginpage.close_driver();
        //this line just to test my assertion
        loginpage.assert_equal(1,1);
        
    });





})