<html>
 <head>
  <h1>Testes automatizados com Cypress</h1>
 </head> Testes automatizados na página de login e de cadastro do Alurapic, utilizando a ferramenta Cypress.<br />
 <br />
📋 <b>Pré-requisitos:</b> <br />
1. Possuir a versão 16.13.1 do Node instalada;<br />
2. Possuir o Cypress Instalado; <br />
3. Possuir o Vs Code Instalado; <br /> <br />
        
🔧 <b>Instalação:</b>
1. Para instalar o Node:
- Baixar a ferramenta NVM for Windows;
- Utilizar a Documentação Oficial do Github: https://github.com/coreybutler/nvm-windows/releases
- Fazer o download do arquivo nvm-setup.exe;
- Após a instalação, abrir o Prompt de Comando e "Executar como administrador";  
- No CMD, digitar o comando <i>nvm install</i>
        
2. Instalar o Cypress: <br />
- Executar o comando <i>npm install cypress --save-dev</i> no Prompt de Comando para instalar o Cyprees; 
- Para abrir a interface do cypress utilizar o comando <i>npx cypress open</i> no Prompt de Comand; <br />

3. Instalar o VS Code: <br/>
- Realizar o download no link: <i>https://code.visualstudio.com/download</i> <br/> <br/>

⚙️ <b>Executando os testes</b> <br/>
1. Abrir o Visual Studio Code; <br/>
2. No topo esquerdo clicar na na opção "File > Open Folder"; <br/>
3. Criar uma pasta para o projeto de testes; <br/>
4. Abrir o terminal do VSCode utilizando o atalho "Ctrl + `" e digitar o teste; <br>
5. Dentro do Terminal utilizar o comando <i>npx cypress open</i> para iniciar o Cypress e pressionar "Enter" para executar; <br/>
6. Quando o cypress carrregar, utilizar a opção <i>E2E (end-to-end) testing</i>; <br/>
7. Para criar o projeto, clicar no botão <i>Continue</i>; <br/>
8. Selecionar o navegador desejado, para os testes do projetos será utilizado o <i>Chrome</i>;<br/>
9. Clicar em <i>Start E2E Testing in Chrome</i>; <br/>
10. Selecionar <i>Create New Spec</i>; <br/>
11. Informar o nome do teste; <br>
12. O framework exibirá a estrutura do código que será criado dentro desse projeto; <br/>
13. Clicar em <i>"Okay, run the spec"</i>; <br>
14. Após executar, abre um painel à esquerda onde podemos conferir que o teste que foi rodado; <br/>
15. Retornar ao VSCode e verificar que a ferramenta criou uma pasta "cypress" e, dentro dela, as pastas "e2e", "fixtures" e "support".
   
</html>
