const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var medicineSchema = new Schema({
    name: {type:  String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    description: {type: String},
    imageUrl: {type: String},
}, {
    timestamps: true
});

const Medicine = mongoose.model('Medicine',medicineSchema);

module.exports = Mroduct;