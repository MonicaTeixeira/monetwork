const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const server = express()

const usersPath = path.join(__dirname, 'users', 'users.json');
server.use(bodyParser.json());

let users = fs.readFileSync(usersPath, 'utf8');
users = JSON.parse(users);

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
  