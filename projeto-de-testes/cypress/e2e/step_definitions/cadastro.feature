Feature: Tela de Cadastro
Background: Realizando login na página de Cadastro
    Given I'm on the Cadastro page

Scenario: Validando o login na página de Cadastro do EventNow
    Then I'll be there on the "Card", I need to find the message "Criar uma conta no EventNow" 

Scenario: Validando o aviso de campo Nome está vazio
    When I click the "Botão" with the "Cadastrar" message
    Then I need to find the "Toast" field with the message "Nome está vazio =("

Scenario: Validando o aviso de campo Sobrenome está vazio
    When I put the "Joyce" in the "Digite seu nome" field
    And I click the "Botão" with the "Cadastrar" message
    Then I need to find the "Toast" field with the message "Sobrenome está vazio =("

Scenario: Validando o aviso de campo E-mail está vazio
    When I put the "Joyce" in the "Digite seu nome" field
    And I put the "Dias" in the "Digite seu sobrenome" field
    And I click the "Botão" with the "Cadastrar" message
    Then I need to find the "Toast" field with the message "E-mail está vazio =("

Scenario: Validando o aviso de campo Senha está vazio
    When I put the "Joyce" in the "Digite seu nome" field
    And I put the "Dias" in the "Digite seu sobrenome" field
    And I put the "joyce@gmail.com.br" in the "Digite seu e-mail" field
    And I click the "Botão" with the "Cadastrar" message
    Then I need to find the "Toast" field with the message "Senha está vazia =("

Scenario: Validando o aviso de campo Senha (Confirmação) está vazio
    When I put the "Joyce" in the "Digite seu nome" field
    And I put the "Dias" in the "Digite seu sobrenome" field
    And I put the "joyce@gmail.com.br" in the "Digite seu e-mail" field
    And I put the "1234567" in the "Digite sua senha" field
    And I click the "Botão" with the "Cadastrar" message
    Then I need to find the "Toast" field with the message "Senha (confirmação) está vazia =("

# Scenario: Validando se as senhas não são iguais
#     When I put the "Joyce" in the "Digite seu nome" field
#     And I put the "Dias" in the "Digite seu sobrenome" field
#     And I put the "joyce@gmail.com.br" in the "Digite seu e-mail" field
#     And I put the "1234567" in the "Digite sua senha" field
#     And I put the "23456" in the "Digite sua senha (Confirmação)" field
#     And I click the "Botão" with the "Cadastrar" message
#     Then I need to find the "Toast" field with the message "Senhas não são iguais"

# Scenario: Validando a mensagem de e-mail inválido
#     When I put the "Joyce" in the "Digite seu nome" field
#     And I put the "Dias" in the "Digite seu sobrenome" field
#     And I put the "*" in the "Digite seu e-mail" field
#     And I put the "1234567" in the "Digite sua senha" field
#     And I put the "1234567" in the "Digite sua senha (Confirmação)" field
#     And I click the "Botão" with the "Cadastrar" message
#     Then I need to find the "Toast" field with the message "E-mail inválido"