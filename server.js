const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 1212;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Ora menino... Servidor abestado está rodando na porta ${port}`);
});