import common from "../support/pageobjects/common";
const UI = new common;

it('Fazer login na página', () => {
    UI.visit();
    UI.validarPagina();
});