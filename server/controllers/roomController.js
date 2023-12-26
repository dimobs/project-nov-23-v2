const fs = require('fs');
const roomController = require('express').Router();
const { hasUser } = require('../middlewares/guards');
const Rooms = require('../rooms');
const path = require('path');
const { getAll, create, getById, update, deleteById, getByUserId } = require('../services/roomService');
const { parseError } = require('../util/parser');
const uniqid = require('uniqid');
const { log } = require('console');
const roomsFilePath = path.join('rooms.js')

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

roomController.get('/', async (req, res) => {

    let rooms = [];
    if (req.query.where) {
        const roomId = JSON.parse(req.query.where.split('=')[1]);
        rooms = await getByRoomId(roomId)
    } else {
        rooms = await getAll();
    }
    res.json(rooms);
});

roomController.get('/:id', (req, res) => {
    // const room = Room. (req.params.id);
    try {
        const result = Rooms.find(r => r.id === req.params.id)
        res.json(result);
    } catch (err) {
        console.log('Wrong or incomplete item!');
    }
});

roomController.delete('/:id', hasUser(), (req, res) => {
    const roomIndex = Rooms.findIndex(x => x.id === req.params.id);
    Rooms.splice(roomIndex, 1);
    res.status(202).end();
});

roomController.put('/:id', hasUser(), async (req, res, next) => {

    //sanitaizing
    const edutData = {};
    edutData.id = req.params.id
    edutData.name = req.body.name;
    edutData.description = req.body.description;
    edutData.url = req.body.url;

    const index = Rooms.findIndex(i => i.id === req.params.id);

   

    if (index !== -1) {
        Rooms[index] = { ...Rooms[index], ...edutData }

        try {
            fs.writeFileSync(roomsFilePath, `module.exports = ${JSON.stringify(Rooms, null, 2)};`, 'utf8');
            res.status(200).json({ message: 'Record updated successfully', data: Rooms.find(item => item.id === req.params.id) });
        } catch (error) {
            console.error('Error updating record:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(404).json({ message: 'Record not found' });
    }


});
// console.log(req.body);
// const room = await getById(req.params.id);
// if (req.user._id != item._ownerId) {
//     return res.status(403).json({ message: 'You cannot modify this record' });
// }

//     try {
//         const result = await update(req.params.id, req.body);
//         return result
//         // res.json(result);
//     } catch (err) {
//         const message = parseError(err);
//         res.status(400).json({ message });
//     }
// });

module.exports = roomController;



