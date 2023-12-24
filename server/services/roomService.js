const Rooms = require('../controllers/rooms');
const path = require('path');
const roomsFilePath = path.join(__dirname, 'rooms.js')

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

async function update(id, editData) {
    const existing = Rooms.findIndex(r => r.id === id)
    Rooms.splice(existing, 1, editData )
    
    // existing.name = editData.name;
    // existing.description = editData.description;
    // existing.url = editData.url;
    console.log(editData);
    return existing;
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