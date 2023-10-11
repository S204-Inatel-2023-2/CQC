import Elements from "../elements/common";
const Common = new Elements;
class PageObjetcs {
    visit = () => {
        cy.visit('https://davisbalbino.github.io/Cadastro/')
    }

    validarMensagem = (id, legenda) => {
        cy.get(Common.map(id)).contains(legenda)
    }
    
    putValue = (value, placeholder) => {
        if(placeholder == "Digite sua senha"){
            cy.get(Common.map(placeholder)).first().type(value)
        }
        else if(placeholder == "Digite sua senha (Confirmação)"){
            cy.get(Common.map(placeholder)).last().type(value)
        }
        else {
            cy.get(Common.map(placeholder)).type(value)
        }
    } 

    clickButton = (button, legend) => {
        cy.get(Common.map(button)).contains(legend).click()
    }

    checkToast = (field, message) => {
        cy.get(Common.map(field)).contains(message)
    }
}
export default PageObjetcs;