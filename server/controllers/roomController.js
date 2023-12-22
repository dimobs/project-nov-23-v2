const roomController = require('express').Router();

const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById, update, deleteById, getByUserId } = require('../services/itemService');
const { parseError } = require('../util/parser');
const uniqid = require('uniqid');


const products = [ 
    {
        id: 'ssda3',
    name: 'Room1',
    description: 'Some description',
    url: 'https://images.unsplash.com/photo-1702677338058-88b95f12c686?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
    id: 'ssda4',
    name: 'Room2',
    description: 'Some description2',
    url: 'https://images.unsplash.com/photo-1702309129794-22c3d7cdc0af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
];


roomController.post('/', (req, res) => {
    
    const record = {
        id: uniqid(),
        name: req.body.name,
        description: req.body.description,
        url: req.body.url
    }
  products.push(record);
    res.status(201).end()
});


roomController.get('/', (req, res) => {
    res.json(products)
   });

module.exports = roomController;