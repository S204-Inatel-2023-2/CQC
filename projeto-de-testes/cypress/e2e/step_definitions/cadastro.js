import {Given, When,Then,And} from "@badeball/cypress-cucumber-preprocessor";
import PageObjetcs from "../../support/pageobjects/common";
const Common = new PageObjetcs;

Given(/I'm on the Cadastro page/,() => {
    Common.visit();
})
When(/I'll be there on the "(.+)", I need to find the message "(.+)"/,(id,legend) => {
    Common.validarMensagem(id,legend);
})
When(/I put the "(.+)" in the "(.+)" field/, (value, placeholder) => {
    Common.putValue(value,placeholder);
})
When(/I click the "(.+)" with the "(.+)" message/,(button, message) => {
    Common.clickButton(button, message);
})
Then(/I need to find the "(.+)" field with the message "(.+)"/, (field, message) => {
    Common.checkToast(field, message);
})