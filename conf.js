exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['tests/todo-spec.js']

    // Protractor communicates directly with the Drivers of Chrome and Firefox
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    // Spec patterns are relative to the current working directory when protractor is called.
    specs: ['tests/simple.spec.js'],
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 50000
    },

    onPrepare: () =>{
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
    }

};