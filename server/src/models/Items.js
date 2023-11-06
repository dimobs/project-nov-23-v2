const { Schema, model, Types: { ObjectId } } = require('mongoose');


const URL_PATTERN = /^https?:\/\/(.+)/;

//from blank, Form
const itemSchema = new Schema({
    sender: { type: String, require: false, minlength: [3, 'Item listing name must be at least 3 characters long'] },
    resiver: { type: String, require: false, minlength: [3, 'Item listing name must be at least 3 characters long'] },
    imageUrl: { type: String, require: false,
    //     validate:{
    //         validator(value) {
    //             return URL_PATTERN.test(value);
    //         },
    //         message: 'Image must be a valid URL'
    //     }
    },
    description: { type: String },
    date: {
        type: String, require:false, default: Date.now,
        // minlength: [10, `Data must be 10 characters longn`],
        // maxlength: [10, 'Data must be 10 characters long']
    },
    amount: { type: Number, require: true },
    isDeleted: { type: Boolean, default: false },
    owner: { type: ObjectId, ref: 'User', require: true },
    votes: {type: [ObjectId], ref:'User', default: []},
    rating: { type: Number, default: 0}
});

const Item = model('Item', itemSchema);

module.exports = Item;