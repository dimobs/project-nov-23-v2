const express = require('express');
const cors = require('cors');
// const path = require('path');
const routes = require('./src/routes');
const config = require('./src/config/config.json')[process.env.DE_ENV || 'development'];

// const cors = require('./src/middlewares/cors');
const initDB = require('./src/config/database');


start()

function start() {
    
    app = express();
    initDB();
    app.use(express.urlencoded({extended: true})) //body parser when work with MPA -
    // get, post data from <form /> or case with searchbars where have to pars data in SPA /> 
    
    app.use(express.json()) //-works with  SPA
    app.use(cors());

app.get('/', (req, res) => {
    res.send('RESTful service!');
});


// require('./config/handlebars')(app);
//const initHandlebars = require('./config/handlebars'); //алтернатива е горното 

// app.use(express.static(path.resolve(__dirname, './public')));
// app.get('/user/users', async (req, res) => {
//     console.log('users1');
//     const data = await User.find({})
//     const result = res.json(data)
//     console.log(result);
// })
app.use(routes);

app.listen(config.PORT, () => console.log(`http://localhost:${config.PORT} App is running on `));
}