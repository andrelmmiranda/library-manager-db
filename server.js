const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares, jsonServer.rewriter({
    '/*': '/$1'
}), router);

server.listen(3001, ()=>{
    console.log('Json Server running...')
});

module.exports = server;