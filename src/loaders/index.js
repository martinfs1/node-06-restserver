const ExpressServer = require('./server/expressServer');
const config = require('../config')

const startServer = async () => {


    const server = new ExpressServer()
    console.log('Express Loaded')

   server.start();
   console.log(`Server listening on port: ${config.port}`)
     
}
startServer();

module.exports = startServer;