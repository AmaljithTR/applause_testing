const assert = require('assert');
const scope = require('./scope');
require('dotenv').config();

module.exports.clickOnNavItem = async (element) => {
    const pageTarget = scope.context.currentPage.target();
    await scope.context.currentPage.waitForSelector(element);
    await scope.context.currentPage.$(element);
    await scope.context.currentPage.evaluate(selector => document.querySelector(selector).click(), element);
    const newTarget = await scope.browser.waitForTarget(target => target.opener() === pageTarget);
    scope.context.newPage = await newTarget.page();
};

module.exports.clickOnItem = async (element) => {
    await scope.context.newPage.waitForSelector(element);
    await scope.context.newPage.click(element);
    return "Action successfull"
}

module.exports.clickOnDocument = async (element) => {
    try {
        await scope.context.newPage.waitForSelector(element);
        await scope.context.newPage.$(element);
        await scope.context.newPage.evaluate(selector => document.querySelector(selector).click(), element);
        return "Action successfull"
    } catch (error) { return "error" }
}

module.exports.clickOnCurrentDocument = async (element) => {
    // try {
    // await scope.context.currentPage.waitForSelector(element);
    await scope.context.currentPage.$(element);
    await scope.context.currentPage.evaluate(selector => document.querySelector(selector).click(), element);
    // return "Action successfull"
    // } catch (error) { return "error" }
}

module.exports.checkResponse = async (actualResponse, expectedResponse) => {
    await assert.equal(actualResponse, expectedResponse)
}

module.exports.checkResult = async (expectedResponse) => {
    if (await scope.context.newPage.waitForSelector(expectedResponse)) {
        return "Action successfull"
    }
}

module.exports.checkCurrentUrl = async (expectedResponse) => {
    let url = await scope.context.currentPage.url();
    let actualResponse = url.split("?");
    assert.equal(actualResponse[0], expectedResponse)
}

module.exports.checkUrl = async (expectedResponse) => {
    let url = await scope.context.newPage.url();
    let actualResponse = url.split("?");
    assert.equal(actualResponse[0], expectedResponse)
}

module.exports.enterText = async (text, element) => {
    await scope.context.newPage.waitForSelector(element)
    await scope.context.newPage.type(element, text)
    await scope.context.newPage.focus(element)
}

module.exports.pressKey = async (key) => {
    await scope.context.newPage.keyboard.press(key)
    return "Action successfull"
}

module.exports.visitWebSite = async () => {
    scope.browser = await scope.driver.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        defaultViewport: null
    });
    scope.context.currentPage = await scope.browser.newPage();
    const url = scope.host;
    await scope.context.currentPage.goto(url, { waitUntil: 'networkidle2', timeout: 0 });
}