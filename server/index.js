const express = require('express');
const config = require('./config/config.json')[process.env.PORT || 'development'];
const initDB = require('./config/database');
const cors = require('./middlewares/cors');
const authController = require('./controllers/authController');
// const dataController = require('./controllers/dataController');
const roomController = require('./controllers/roomController')
const commentRoomController = require('./controllers/commentRoomController');
const trimBody = require('./middlewares/trimBody');
const session = require('./middlewares/session');

start();

async function start() {    
    await initDB();
}

const app = express();
app.use(express.urlencoded({extended: true})) //form value
app.use(express.json()); //auth
app.use(cors()); //autitecation
app.use(trimBody()); //sanitarise
app.use(session()); //jwt
app.use('/static', express.static('data/media')); //hardDriveSave
app.use('/users', authController); 

app.get('/', (req, res) => {
    res.json({ message: 'REST service operational' });
});

// app.use('/data/catalog', dataController); //admin set users
app.use('/data/rooms', roomController);
app.use('/data/comments', commentRoomController);

app.listen(config.PORT, () => console.log(`http://localhost:${config.PORT} App is running on `));
//  app.listen(config.PORT, () => console.log(`http://192.168.50.206:${config.PORT} App is running on `));
