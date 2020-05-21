const Model = require('./Model');
const Server = require('./Server');
const Controller = require('./Controller');

function init() {
    const server = new Server(3000);
    server.start();
}

init();