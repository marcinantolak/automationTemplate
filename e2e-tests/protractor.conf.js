exports.config = {
    directConnect: true,
    allScriptsTimeout: 11000,

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['test/*.js'],
    baseUrl: 'https://examplePage.com',
    framework: 'jasmine',

    capabilities: {
      browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
        args: [
            '--disable-infobars',
            '--disable-extensions',
            'verbose',
            '--start-maximized'
        ],
            prefs: {
            'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
        }
    }
},

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        defaultTimeoutInterval: 50000
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
    },

    useAllAngular2AppRoots: true
};