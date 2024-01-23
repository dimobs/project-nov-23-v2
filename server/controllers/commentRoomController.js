const commentRoomController = require('express').Router();
const uniqid = require('uniqid');
const {hasUser} = require('../middlewares/guards');
const service = require('../services/commentRoomService');

// Create a new comment
commentRoomController.post('/', 
hasUser(), 
async (req, res) => {
    try {
        const { userId, data, owner } = req.body;
        const comments = await service.readDataFile();

        const newComment = { 
          commentId: uniqid(),
          createdAt: new Date().toISOString(),
          userId: userId,
          text: data,
          owner: owner
        };

        comments.push(newComment);

        await service.writeDataFile(comments);
          
        res.status(201).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Read - Get all comments
commentRoomController.get('/', async (req, res) => {
    try {
        const comments = await service.readDataFile();
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

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
commentRoomController.delete('/:id', hasUser(), async (req, res) => {
    console.log(req.params.id);
    try {
        let comments = await service.readDataFile();
        const index = comments.findIndex(c => c.commentId === req.params.id);

        if (index === -1) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        const deletedComment = comments.splice(index, 1)[0];

        await service.writeDataFile(comments);

        res.json(deletedComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = commentRoomController;
