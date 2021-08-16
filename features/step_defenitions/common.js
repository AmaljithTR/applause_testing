const actions = require('../support/actions')
const selectors = require('../support/selectors')
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber')
setDefaultTimeout(60 * 1000);

Given('Open website', async () => {
    await actions.visitWebSite();
});

When('Goto Help', async () => {
    await actions.clickOnNavItem(selectors.help)
});

When('Click FAQ', async () => {
    await actions.clickOnItem(selectors.forFans)
});

When('Select a Question', async () => {
    await actions.clickOnDocument(selectors.forFansQstn)
});

When('I Submitted yes for the feedback form', async () => {
    this.actualResponse = await actions.clickOnDocument(selectors.feedbackYes)
});

When('I enter text {string} to search', async (text) => {
    await actions.enterText(text, selectors.searchInput)
});

When('Select first suggestion', async () => {
    this.actualResponse = await actions.clickOnItem(selectors.helpSuggestion)
});

When('Press {string}', async (key) => {
    await actions.pressKey(key)
});

When('I Click SignIn', async () => {
    await actions.clickOnNavItem(selectors.signIn)
});

Then('I recieve no result', async () => {
    this.actualResponse = await actions.checkResult(selectors.noResult)
});

Then('I should recieve {string}', async (expectedResponse) => {
    await actions.checkResponse(this.actualResponse, expectedResponse)
});


Then('I should be redirected to {string}', async (expectedResponse) => {
    await actions.checkUrl(expectedResponse)
});