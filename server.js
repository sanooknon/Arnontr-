const http = require('http');

const app = require('./app'); // Import app.js

const port  = process.env.PORT || 3000;

const server = http.createServer(app); //use app.js

server.listen(port);

console.log("Server working port 3000 !!! ");