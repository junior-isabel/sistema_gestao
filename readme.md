se vai usar a estrutura de pasta deste projeto podes pular o passo 1 e segui a partir do passo 2.
----------

## **1 - Gera estrutura de pasta e arquivos**
npx express-generator --view=ejs myapp

## **2 - Instalar as bibliotecas do projecto**
npm i
## **3 - Entrar na pasta do projecto**
cd myapp
## **4 - set debug**
## *windows*
set DEBUG=myapp:*
## *macOs*
DEBUG=myapp:*
## **5 - Rodando o projeto em modo desenvolvedor**
npm run dev
## **5.1 - Rodando o projeto em modo produção**
npm run start