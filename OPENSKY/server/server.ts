const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();
const fs = require('fs');

server.use(middleware);
server.use(jsonServer.bodyParser)

server.post('/login', (req: { body: { email: string; password: string; }; }, res: { send: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }, next: any) => {
  const users = readUsers();
  const user = users.filter(
    (    u: { email: string; password: string; }) => u.email === req.body.email && u.password === req.body.password
  )[0];

  if (user) {
    delete user.password;
    res.send({ ...user, token: generateToken() });
  } else {
    res.status(401).send('Incorrect Email or password');
  }
});

function readUsers() {
  const dbRaw = fs.readFileSync("./server/getUsers.json");
  const users = JSON.parse(dbRaw).data.users;
  return users;
}

function generateToken() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

server.listen(3000, () => {
  console.log('JSON Server is running');
});
