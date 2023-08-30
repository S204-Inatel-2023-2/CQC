import elements from "../elements/common";
const UI = new elements;
class common {
    visit(){
        cy.visit("https://davisbalbino.github.io/Cadastro/")
    }

    validarPagina(){
        cy.get(UI.titulo()).contains("Criar uma conta no Projeto")
    }
}
export default common;