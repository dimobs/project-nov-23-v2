const fs = require('fs');
const roomController = require('express').Router();
const { hasUser } = require('../middlewares/guards');
const Rooms = require('../rooms');
const path = require('path');
const { getAll, create, getById, update, deleteById, getByUserId } = require('../services/itemService');
const { parseError } = require('../util/parser');
const uniqid = require('uniqid');
const filePath = path.join(__dirname, 'rooms.js')

roomController.post('/', (req, res) => {
    
    const content = {
        id: uniqid(),
        name: req.body.name,
        description: req.body.description,
        url: req.body.url
    };

    writeDataToFile(content);

    function writeDataToFile(data) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      }

      let existingData = [];
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        existingData = JSON.parse(fileContent);
      } catch (error) {
        console.error('Error reading file:', error.message);
      };

    existingData.push(content);
    writeDataToFile(existingData);
console.log('New room added successfully.');

    res.status(201).end()
});


roomController.get('/', (req, res) => {
    res.json(Rooms)
   });

   roomController.get('/:id', (req, res) => {
    // const room = Room. (req.params.id);
    try {
        const result = Rooms.find(r => r.id === req.params.id)
        res.json(result);
    }catch(err) {
        console.log('Wrong or incomplete item!');
    }
});

module.exports = roomController;



