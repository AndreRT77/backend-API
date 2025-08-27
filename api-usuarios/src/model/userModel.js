//Simulação de um banco de dados em memória 
let users = [
    {id:1, name: 'Alice', email: 'alice@gmail.com'},
    {id:2, name: 'Roberval', email: 'roberval@gmail.com'},
    {id:3, name: 'Josenild', email: 'josenildo@gmail.com'},
]

//Função para buscar todos os usuários
const findAll = () => {
    return users;
}

//Função para buscar um usuário por ID
const findById = (id) => {
    return users.find(user => user.id === id);
}  
// Função que adiciona um novo usuário
const creat = (newUser) => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const userWithId = {id: newId, ...newUser}
    users.push(userWithId);
    return userWithId;
}

//Exportar as funções
module.exports = {
    findAll,
    findById,
    create
}