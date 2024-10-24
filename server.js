const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db/db.json'); // Seu arquivo "db/db.json".
const middlewares = jsonServer.defaults();

server.use(cors()); // Habilita CORS (Cross-Origin Resource Sharing).
server.use(middlewares);
server.use(router);

// Adiciona a configuração de middleware para CORS (Cross-Origin Resource Sharing).
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite qualquer origem.
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
server.listen(3333, () => {
  console.log('JSON-Server is running!');
});
