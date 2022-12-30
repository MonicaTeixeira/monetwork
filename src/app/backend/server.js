const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

// Criar servers de express
const server = express()
// Routes e middleware para o server local json
const usersPath = path.join(__dirname, 'users', 'users.json');
// Campo parse JSON (como enviados por clientes API)
server.use(bodyParser.json());
// Ler users do users.json
let users = fs.readFileSync(usersPath, 'utf8');
users = JSON.parse(users);
//Cors para postman
let cors = require("cors");
server.use(cors());

server.get('/', (req, res) => {
    res.send('Teste!!!')
})
server.get('/users', (req, res) => {
    res.send(users)
})

server.post('/users', (req, res) => {

    const newUsers = req.body;
    users.push(newUsers)

    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

    res.send(newUsers);
})


  server.listen(3000, () => {
    console.log('Servidor a rodar na porta 3000')
})
  