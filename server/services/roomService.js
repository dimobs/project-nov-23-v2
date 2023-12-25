const Rooms = require('../controllers/rooms');
const path = require('path');
const roomsFilePath = path.join(__dirname, 'rooms.js')
const fs = require('fs');

async function getAll() {

    return Rooms;
}

async function getByUserId(userId) {
    return Item.find({ _ownerId: userId });
}

async function getById(id) {
    return Item.findById(id);
}

async function create(item) {
    return Item.create(item);
}

async function update(id, newEditData) {
    const existing = {};
    existing.name = newEditData.name;
    existing.description = newEditData.description;
    existing.url = newEditData.url;

    try {

        const itemToUpdate = fs.readFileSync(`module.exports = ${JSON.stringify(existing, null, 2)};`, 'utf8')
        
        // const itemToUpdate = existingData.find(item => item.id === id);

        if (itemToUpdate) {
            Object.assign(itemToUpdate, existing)
            await fs.writeFile(roomsFilePath, JSON.stringify(existingData, null, 2));
           return res.status(200).json({message: 'Resource updated successfully', data: itemToUpdate});
        }else {
            return res.status(404).json({message: 'Resource not found'});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'Internal server error'})
    }


    // const existing = Rooms.findIndex(r => r.id === id)
    // Rooms.splice(existing, 1, editData)

    existing.name = editData.name;
    existing.description = editData.description;
    existing.url = editData.url;
//     console.log(editData);
//     return existing;
}

async function deleteById(id) {
    return Item.findByIdAndDelete(id);
}


module.exports = {
    getAll,
    getByUserId,
    getById,
    create,
    update,
    deleteById
};