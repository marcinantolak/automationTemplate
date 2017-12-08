var homePage = require('../page/homePage');

describe('some description', function() {
    beforeAll(() => {
        browser.ignoreSynchronization = true;
        browser.get('https://examplePage.com');
    });

    it('should have correct title', () => {
        expect(browser.getTitle()).toEqual("Example Web Page Title");
    });

    it('should have correct link and buttons', () => {
        expect(homePage.textInput.isDisplayed()).toEqual(true);
        expect(homePage.someLink.isDisplayed()).toEqual(true);
        expect(homePage.someButton.isDisplayed()).toEqual(true);
    });

    it('login page', () => {
        expect(homePage.someButton.isDisplayed()).toEqual(true);
        homePage.someButton.click();
        expect(browser.getCurrentUrl()).toEqual('https://logedPage.com');
    });
});