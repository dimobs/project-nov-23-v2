const express = require('express');
const config = require('./config/config.json')[process.env.DE_ENV || 'development'];
const initDB = require('./config/database');
const cors = require('./middlewares/cors');
const authController = require('./controllers/authController');
const dataController = require('./controllers/dataController');
const roomController = require('./controllers/roomController')
const trimBody = require('./middlewares/trimBody');
const session = require('./middlewares/session');


const connectionString = 'mongodb://localhost:27017/furniture4';

start();

async function start() {

    const app = express();
   await initDB();
    app.use(express.urlencoded({extended: true})) 


    app.use(express.json());
    app.use(cors());
    app.use(trimBody());
    app.use(session());

    app.get('/', (req, res) => {
        res.json({ message: 'REST service operational' });
    });

    app.use('/users', authController);
    app.use('/data/catalog', dataController);
    // app.use('/data/rooms', roomController);

    app.post('/data/rooms', (req, res) => {
        console.log(req.body);
        res.end();
    })

app.listen(config.PORT, () => console.log(`http://localhost:${config.PORT} App is running on `));

}