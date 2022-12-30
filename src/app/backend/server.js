const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require("cors");

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
server.use(cors({
  origin: 'http://localhost:4200'
}));

server.get('/', (req, res) => {
    res.send('Teste!!!')
})
server.get('/users', (req, res) => {
    res.send(users)
})
server.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

  res.send(newUser);
});

server.post('/login', (req, res) => {
  console.log('Recebendo requisição de login:', req.body);
  try {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      res.send({ success: true });
    } else {
      res.status(401).send({ error: 'Email ou senha inválidos' });      
    }
  } catch (error) {
    console.error('Erro ao processar requisição de login:', error);
    res.status(500).send({ error: 'Erro interno no servidor' });
  }
});

  

  server.listen(3000, () => {
    console.log('Servidor a rodar na porta 3000')
})
  