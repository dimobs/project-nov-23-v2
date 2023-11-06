const router = require('express').Router();

const authController = require('./controllers/authController');
// const itemController = require('./controllers/itemController');

router.use('/user', authController);
// router.use('/data/items', itemController);

module.exports = router;

