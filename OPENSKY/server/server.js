const jsonServer  = require('json-server');
const middleware  = jsonServer.defaults();
const server      = jsonServer.create();
const router      = jsonServer.router("./data/users/json/getUsers.json");
const userdb      = require("./data/users/json/getUsers.json");
const fs          = require("fs");

server.use(middleware);
server.use(jsonServer.bodyParser);

server.post('/login', (req, res, next) =>{
  const users = readUsers();
  const user  = users.filter(
    u => u.email === req.body.email && u.password === req.body.password
  )
})


