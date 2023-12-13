const router = require('express').Router();

const { default: UserDeleteModal } = require('../../client/pr-nov-23v2/src/components/Administrator/UserDeleteModal');
const authController = require('./controllers/authController');
const itemController = require('./controllers/itemController');

router.use('/users', authController);
router.use('/data/items', itemController);
router.use('/data/UserDetails', UserDeleteModal);

module.exports = router;

