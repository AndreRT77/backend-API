

const express = require ('express');

const router = express.Router();

const userController = require('../controller/userController');

//Criando as rotas da nossa API

//1ºRota para obter todos os usuários
router.get('/', userController.getAllUsers );


//2ºRota para obter dados de um usuário por ID
router.get('/:id', userController.getUserById);

//3º Rota para criar um novo usuário

router.post('/', userController.createUser);


module.exports = router;