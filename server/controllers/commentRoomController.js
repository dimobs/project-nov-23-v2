const roomService = require('../services/roomService');
const commentRoomController = require('express').Router();
const uniqid = require('uniqid');
const {hasUser} = require('../middlewares/guards');

// Create a new room
commentRoomController.post('/', hasUser(), (req, res) => {
    try {
        // const { name, description, url } = req.body;
        // const rooms = await roomService.readDataFile();

        // const newRoom = { 
        //   id: uniqid(),
        //   name, 
        //   description, 
            // url 
        // };
        // rooms.push(newRoom);

        // await roomService.writeDataFile(rooms);

        // res.status(201).json(newRoom);
        const {id, text} = req.body;
        const newComment = {
            id,
            text
        }
        console.log(req.body);
          res.status(201).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Read - Get all rooms
// commentRoomController.get('/', async (req, res) => {
//     try {
//         const rooms = await roomService.readDataFile();
//         res.json(rooms);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// Get a specific room by ID
// commentRoomController.get('/:id', async (req, res) => {
//     try {
//         const rooms = await roomService.readDataFile();
//         const room = rooms.find(r => r.id === req.params.id);

//         if (!room) {
//             return res.status(404).json({ error: 'Room not found' });
//         }

//         res.json(room);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// Update a room by ID
// commentRoomController.put('/:id', hasUser(), async (req, res) => {
//     try {
//         const { name, description, url } = req.body;
//         let rooms = await roomService.readDataFile();

//         const index = rooms.findIndex(r => r.id === req.params.id);

//         if (index === -1) {
//             return res.status(404).json({ error: 'Room not found' });
//         }

//         rooms[index] = { ...rooms[index], name, description, url };

//         await roomService.writeDataFile(rooms);

//         res.json(rooms[index]);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// Delete a room by ID
// commentRoomController.delete('/:id', hasUser(), async (req, res) => {
//     try {
//         let rooms = await roomService.readDataFile();

//         const index = rooms.findIndex(r => r.id === req.params.id);

//         if (index === -1) {
//             return res.status(404).json({ error: 'Room not found' });
//         }

//         const deletedRoom = rooms.splice(index, 1)[0];

//         await roomService.writeDataFile(rooms);

//         res.json(deletedRoom);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

module.exports = commentRoomController;