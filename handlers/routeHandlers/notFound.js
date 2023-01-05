/* 
    Title: Not Found Handler
    Description: 404 Not Found Handler
    Author: Basirul Billah
    Date: 05/01/2023
 */

// Module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found.',
    });
};

module.exports = handler;