
//importar o módulo express
const express = require('express');

//criar uma aplicação express
const app = express();

//Definir a porta em que o servido irá escutar
const porta = 8888;

//Rota de teste de API
app.get('/', (req, res) => {
    res.send ("API de usuários está funcionando");
})

//inicia o servido
app.listen(porta, () =>{
    console.log(`servidor rodando em http://localhost:${porta}`);
})

