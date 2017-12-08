"use strict";
let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;
const examplePageHome = require("../page/homePage");
const { Given } = require("cucumber");
const { When } = require("cucumber");
const { Then } = require("cucumber");

    Given('I open home page', function () {
        browser.get('https://examplePage.com/');
    });

    When(/^I am on correct url$/, function() {
        return expect(browser.getCurrentUrl()).to.eventually.equal("https://examplePage.com/");
        return expect(browser.getTitle()).to.eventually.equal("Example Web Page Title");
    });

    When(/^I click contact link$/, function() {
        examplePageHome.textInput.click();
    });

    Then(/^I should see all links$/, function() {
        return expect(examplePageHome.textInput.isDisplayed()).to.eventually.equal(true);
        return expect(examplePageHome.someLink.isDisplayed()).to.eventually.equal(true);
        return expect(examplePageHome.someButton.isDisplayed()).to.eventually.equal(true);
    });

    Then(/^I should be on correct page$/, function() {
        return expect(browser.getCurrentUrl()).to.eventually.equal("https://logedPage.com'");
        return expect(browser.getTitle()).to.eventually.equal("Loged Web page Title");
    });