/* 
    Title: Uptime Monitoring Application
    Description: A RESTful API to monitor uptime or downtime of user defined links.
    Author: Basirul Billah
    Date: 03/01/2023

 */

// dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');

// app object - module scaffolding
const app = {};

// configuration 
app.config = {
    port: 3000,
};

// create server 
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// handle request response 
app.handleReqRes = handleReqRes;

// start the server
app.createServer();