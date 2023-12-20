const roomController = require('express').Router();

const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById, update, deleteById, getByUserId } = require('../services/itemService');
const { parseError } = require('../util/parser');


roomController.get('/', async (req, res) => {
    // let items = [];
    // if (req.query.where) {
    //     const userId = JSON.parse(req.query.where.split('=')[1]);
    //     items = await getByUserId(userId);
    // } else {
    //     items = await getAll();
    // }
    // res.json(items);
    console.log(req.body)
});

module.exports = roomController;