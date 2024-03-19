const roomController = require('express').Router();

const roomService = require('../services/roomService');
const uniqid = require('uniqid');
const {hasUser} = require('../middlewares/guards');
const fileUpload = require('express-fileupload');
roomController.use(fileUpload());
const fs = require('fs/promises'); // Using promises version for async/await
const path = require('path');

// Create a new room
roomController.post('/', 
// hasUser(), 
async (req, res) => {

    const file = req.files?.file
    const {name, description} = req.body
    const id = uniqid();
    try {
        const fileExtension = file.name.split('.').pop();
        const fileName = `${id}.${fileExtension}`;
        const filePath = path.join(__dirname, `../data/media/${fileName}`);
        await fs.writeFile(filePath, file.data, (error) => {
            if(error) {
                console.error('Error writing file:', error)
                res,status(500).send('Error uploading file')
            }else {
        

                console.log('File uploaded successfully');
                res.status(201).send('File upload successfully')
            }
        })

        const rooms = await roomService.readDataFile();
        const newRoom = { 
          id,
          name, 
          description,
          url: `http://localhost:3030/static/${fileName}` 
        };
        rooms.push(newRoom);
        await roomService.writeDataFile(rooms);
        res.status(201).json(newRoom);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Read - Get all rooms
roomController.get('/', async (req, res) => {
    try {
        const rooms = await roomService.readDataFile();
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Read a specific room by ID
roomController.get('/:id', async (req, res) => {
    try {
        const rooms = await roomService.readDataFile();
        const room = rooms.find(r => r.id === req.params.id);

        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }

        res.json(room);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a room by ID
roomController.put('/:id', hasUser(), async (req, res) => {
    try {
        const { name, description, url } = req.body;
        let rooms = await roomService.readDataFile();

        const index = rooms.findIndex(r => r.id === req.params.id);

        if (index === -1) {
            return res.status(404).json({ error: 'Room not found' });
        }

        rooms[index] = { ...rooms[index], name, description, url };

        await roomService.writeDataFile(rooms);

        res.json(rooms[index]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a room by ID
roomController.delete('/:id', hasUser(), async (req, res) => {
    try {
        let rooms = await roomService.readDataFile();

        const index = rooms.findIndex(r => r.id === req.params.id);

        if (index === -1) {
            return res.status(404).json({ error: 'Room not found' });
        }

        const deletedRoom = rooms.splice(index, 1)[0];

        await roomService.writeDataFile(rooms);

        res.json(deletedRoom);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = roomController;
