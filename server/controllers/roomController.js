const roomController = require('express').Router();
const fs = require('fs/promises'); // Using promises version for async/await
const path = require('path');
const dataFilePath = path.join(__dirname, '../data/rooms.json');
const uniqid = require('uniqid');
const {hasUser} = require('../middlewares/guards');

// Create a new room
roomController.post('/', hasUser(), async (req, res) => {
    try {
        const { name, description, url } = req.body;
        const rooms = await readDataFile();

        const newRoom = { 
          id: uniqid(),
          name, 
          description, url 
        };
        rooms.push(newRoom);

        await writeDataFile(rooms);

        res.status(201).json(newRoom);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Read - Get all rooms
roomController.get('/', async (req, res) => {
    try {
        const rooms = await readDataFile();
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a specific room by ID
roomController.get('/:id', async (req, res) => {
    try {
        const rooms = await readDataFile();
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
        let rooms = await readDataFile();

        const index = rooms.findIndex(r => r.id === req.params.id);

        if (index === -1) {
            return res.status(404).json({ error: 'Room not found' });
        }

        rooms[index] = { ...rooms[index], name, description, url };

        await writeDataFile(rooms);

        res.json(rooms[index]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a room by ID
roomController.delete('/:id', hasUser(), async (req, res) => {
    try {
        let rooms = await readDataFile();

        const index = rooms.findIndex(r => r.id === req.params.id);

        if (index === -1) {
            return res.status(404).json({ error: 'Room not found' });
        }

        const deletedRoom = rooms.splice(index, 1)[0];

        await writeDataFile(rooms);

        res.json(deletedRoom);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Helper function to read data from the file
async function readDataFile() {
    try {
        const data = await fs.readFile(dataFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // If the file doesn't exist, return an empty array
        if (error.code === 'ENOENT') {
            return [];
        }
        throw error;
    }
}

// Helper function to write data to the file
async function writeDataFile(data) {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
}

module.exports = roomController;
