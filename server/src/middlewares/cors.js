module.exports = () => (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'HEAD, OPTIONS, GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Authorization');

    next();
};

//you can install npm i corse and at index.js => const cors = require('corse'), app.use(corse())
// 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
// 'Access-Control-Allow-Credentials': false,
// 'Access-Control-Max-Age': '86400',
// 'Access-Control-Allow-Headers': 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-Authorization, X-Admin'