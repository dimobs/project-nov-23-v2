const fs = require('fs/promises'); // Using promises version for async/await
const path = require('path');
const dataFilePath = path.join(__dirname, '../data/rooms.json');


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
};

async function writeDataFile(data) {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
}




module.exports = {
    readDataFile, 
    writeDataFile
};