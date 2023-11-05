const app = require('express')();
// const path = require('path');
const routes = require('./src/routes');
const config = require('./src/config/config.json')[process.env_NODE_ENV || 'development'];

console.log('dasda');
// const app = express();
app.get('/', (req, res) => {
    res.send('Dimoooooooooooo')
});
// app.use(express.urlencoded({extended: true})) 
//body parser - get, post data from <form /> 

// require('./config/handlebars')(app);
//const initHandlebars = require('./config/handlebars'); //алтернатива е горното 

// app.use(express.static(path.resolve(__dirname, './public')));

app.use(routes);
app.listen(config.PORT, console.log.bind(console, `App is running on http://localhost${config.PORT}`));