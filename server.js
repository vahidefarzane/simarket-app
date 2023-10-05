const jsonServer = require("json-server");
const data = require("./db.json");
const server = jsonServer.create();

const router = jsonServer.router(data);

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
