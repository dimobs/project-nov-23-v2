const fs = require('fs');
const roomController = require('express').Router();
const { hasUser } = require('../middlewares/guards');
const Rooms = require('../controllers/rooms');
const path = require('path');
const { getAll, create, getById, update, deleteById, getByUserId } = require('../services/itemService');
const { parseError } = require('../util/parser');
const uniqid = require('uniqid');
const roomsFilePath = path.join(__dirname, 'rooms.js')

// roomController.post('/', (req, res) => {
    
//      function readDataFromFile() {
//         try {
//           const fileContent = fs.readFileSync(filePath, 'utf8');
//           return JSON.parse(fileContent);
//         } catch (error) {
//           // If the file doesn't exist or there's an error reading it, return an empty array
//           return [];
//         }
//       }
      
//       // Function to write data to the file
//       function writeDataToFile(data) {
//         fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
//       }
      
//       // Sample data received from the server
//       const newData = {
//         id: uniqid(),
//         name: req.body.name,
//         description: req.body.description,
//         url: req.body.url
//     };
      
//       // Read existing data from the file
//       const existingData = readDataFromFile();
      
//       // Add the new data to the existing data
//       existingData.push(newData);
      
//       // Write the updated data back to the file
//       writeDataToFile(existingData);
      
//       console.log('Data saved successfully.');
//       res.status(201).json(newData)
// });


roomController.post('/', (req, res) => {
    try {
        const existingRoom = require(roomsFilePath);
        const newRoom = {
                    id: uniqid(),
                    name: req.body.name,
                    description: req.body.description,
                    url: req.body.url
                };

                existingRoom.push(newRoom);
                fs.writeFileSync(roomsFilePath, `module.exports = ${JSON.stringify(existingRoom, null, 2)};`, 'utf8');   
            
                res.status(201).json({ message: 'Room added successfully', room: newRoom });
            
            } catch (error) {
              res.status(500).json({ message: 'Internal Server Error' });
              console.error('Error adding room:', error.message);
            }
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

roomController.delete('/:id', hasUser(), (req, res) => {
    const roomIndex = Rooms.findIndex(x => x.id === req.params.id);
    Rooms.splice(roomIndex, 1);
    res.status(202).end();
});

module.exports = roomController;



