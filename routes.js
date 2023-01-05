/* 
    Title: Routes
    Description: Application routes.
    Author: Basirul Billah
    Date: 03/01/2023
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;