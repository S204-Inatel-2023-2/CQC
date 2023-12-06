# Documentação para Testes de Frontend com Cypress

Este documento fornece informações e instruções sobre o arquivo de CI/CD para execução de testes de frontend utilizando o framework Cypress. O fluxo de trabalho descrito abaixo é projetado para ser executado automaticamente sempre que há um push no repositório.

## Estrutura do Projeto

- **projeto-de-testes:** Diretório contendo os arquivos do projeto de testes.
  - **cypress:** Diretório Cypress contendo os testes e configurações.
    - **e2e:** Diretório com os scripts de teste Cypress.
  - **cypress.json:** Arquivo de configuração do Cypress.
  - **package.json:** Arquivo de configuração do Node.js.
  - **npm run postcypress:run:** Comando para gerar relatórios pós-execução.

- **.github/workflows:** Diretório onde o arquivo CI/CD reside.
  - **main.yml:** Arquivo de workflow para GitHub Actions.

## Arquivo de CI/CD (main.yml)

### Disparador (Trigger)

O workflow é acionado apenas quando há um push no repositório.

### Estrutura do Workflow

O workflow consiste em uma única job chamada `cypress-run`, que é executada em um ambiente Ubuntu. Esta job contém os seguintes passos:

1. **Checkout do Código:**
   - Utiliza a ação `actions/checkout@v2` para obter o código do repositório.

2. **Configuração do Ambiente Node.js:**
   - Utiliza a ação `actions/setup-node@v2` para configurar a versão do Node.js especificada no arquivo.

3. **Instalação das Dependências e Execução do Cypress:**
   - Navega até o diretório do projeto.
   - Instala as dependências usando `npm install`.
   - Executa os testes Cypress localizados em `cypress/e2e/` usando `./node_modules/.bin/cypress run`.

4. **Geração do Relatório Pós-Execução:**
   - Executa um comando npm para gerar relatórios pós-execução do Cypress.

5. **Upload do Relatório como Artefato:**
   - Utiliza a ação `actions/upload-artifact@v2` para arquivar os relatórios gerados na pasta `projeto-de-testes/cypress/reports`.

### Como Usar

1. Configure seu projeto Cypress localmente e organize os testes em diretórios.
2. Coloque o arquivo `main.yml` no diretório `.github/workflows` do seu repositório.
3. Faça push das alterações para o GitHub.
4. O workflow será acionado automaticamente após cada push, executando os testes e gerando relatórios.

### Resultados

- Os relatórios gerados estarão disponíveis como artefatos de produção no GitHub, fornecendo uma visão detalhada sobre o resultado dos testes de frontend. Isso facilita a identificação de falhas e o monitoramento contínuo da qualidade do código.

## Documentação para Testes de API com Newman (CQC API)

Este documento fornece informações e instruções sobre o arquivo de CI/CD para execução de testes de API utilizando o Postman e Newman. O fluxo de trabalho descrito abaixo é projetado para ser executado automaticamente sempre que há um push ou pull request na branch `main` do repositório. Também pode ser acionado manualmente através da interface do GitHub.

## Estrutura do Projeto

- **postman:** Diretório contendo arquivos do Postman.
  - **equipe-cqcapi.json:** Coleção de requisições Postman para a equipe da CQC API.

- **.github/workflows:** Diretório onde o arquivo CI/CD reside.
  - **main.yml:** Arquivo de workflow para GitHub Actions.

## Arquivo de CI/CD (main.yml)

### Disparadores (Triggers)

O workflow é acionado em três cenários:

1. **Push:** Executado quando há push na branch `main`.
2. **Pull Request:** Executado quando há pull request na branch `main`.
3. **Workflow Dispatch:** Pode ser manualmente acionado através da interface do GitHub.

### Estrutura do Workflow

O workflow consiste em uma única job chamada `build`, que é executada em um ambiente Ubuntu. Esta job contém os seguintes passos:

1. **Checkout do Código:**
   - Utiliza a ação `actions/checkout@v2` para obter o código do repositório.

2. **Verificação de Versões:**
   - Verifica as versões do Newman e do Node no ambiente.

3. **Instalação do Newman-Reporter-Htmlextra:**
   - Utiliza o npm para instalar globalmente o reporter `newman-reporter-htmlextra`.

4. **Execução da Coleção do Postman:**
   - Executa a coleção do Postman usando o Newman.
   - Gera um relatório em formato HTML usando os reporters `cli` e `htmlextra`.
   - Exporta o relatório para `./results/Report.html`.

5. **Arquivamento de Artefatos de Produção:**
   - Utiliza a ação `actions/upload-artifact@v2` para arquivar o relatório HTML gerado.

### Como Usar

1. Configure o Postman e crie a coleção de testes para a CQC API.
2. Coloque a coleção no diretório `postman` do seu repositório.
3. Copie o arquivo `main.yml` para o diretório `.github/workflows` do seu repositório.
4. Faça push das alterações para o GitHub.
5. O workflow será acionado automaticamente em push, pull request ou manualmente.

### Resultados

- O relatório gerado estará disponível como um artefato de produção no GitHub.

Este arquivo de CI/CD automatiza a execução de testes de API para a CQC API, fornecendo feedback rápido sobre a integridade das API, facilitando a detecção de regressões e problemas de integração.