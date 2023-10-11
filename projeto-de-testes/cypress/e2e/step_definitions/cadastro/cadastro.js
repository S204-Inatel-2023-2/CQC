import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import common from "../../../support/pageobjects/common"
const Common = new common;
Given("I'm on the login page",() => {
    Common.visit();
})