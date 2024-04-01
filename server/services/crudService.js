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
    let response;
    if (data.image) {
       response = await fs.writeFile(data.filePath, data.file, (error) => {
            if(error) {
                console.error('Error writing file:', error)
                res.status(500).send('Error uploading file')
            }else {       
                console.log('File uploaded successfully');
                res.status(201).send('File upload successfully')
            }
        }); 
    }else {
      response = await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
    }

    return response;
}

module.exports = {
    readDataFile, 
    writeDataFile
};