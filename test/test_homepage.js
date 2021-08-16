const HomePage = require("../pages/homepage");


describe("This is describe block",function(){
    this.timeout(50000);

    beforeEach(function(){
        //action performed before test
    });

    afterEach(function(){
        //action performed after test
    });

    it("Test 1",function(){
        // test step here

        HomePage.open_url("https://www.google.com");
        HomePage.perform_search("tegyuh");

    });
})