const roomController = require('express').Router();

const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById, update, deleteById, getByUserId } = require('../services/itemService');
const { parseError } = require('../util/parser');

const products = [ 
    {
        id: 'ssda3',
    name: 'Room1',
    descriotion: 'Some description',
    url: 'http://dir.bg'
},
{
    id: 'ssda4',
    name: 'Room2',
    descriotion: 'Some description2',
    url: 'http://omg.bg'
},
];


roomController.post('/', (req, res) => {
    
    const record = {
        id: uniqid(),
        name: req.body.name,
        descriotion: req.body.descriotion,
        url: req.body.url
    }
  products.push(record);
    res.status(201).end()
});


roomController.get('/', (req, res) => {
    res.json(products)
   });

module.exports = roomController;