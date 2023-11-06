class Elements {
    withId = (id) => { return `[class^="${id}"]`}
    placeholder = (id) => {return `[placeholder^="${id}"]`}
    map = (id) => {
        const elements = {
            "Entrada": this.withId("entrada"),
            "Digite seu nome": this.placeholder("Digite seu nome"),
            "Digite seu sobrenome": this.placeholder("Digite seu sobrenome"),
            "Digite seu e-mail": this.placeholder("Ex.: leticia@mail.com"),
            "Digite sua senha": this.placeholder("Digite sua senha: "),
            "Digite sua senha (Confirmação)": this.placeholder("Digite sua senha: "),
            "Card": this.withId("Card"),
            "Toast": this.withId("Toastify"),
            "Botão": this.withId("botao"),
        }
        return elements[id]
    }
}
export default Elements;