const { setWorldConstructor } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');
const scope = require('./support/scope');
require('dotenv').config();

const World = function () {
    scope.host = process.env.homeUrl;
    scope.driver = puppeteer;
    scope.context = {};
};

setWorldConstructor(World);