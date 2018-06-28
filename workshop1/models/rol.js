const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rol = new Schema({
    rolName: { type: String },
    description: { type: String }
});

module.exports = mongoose.model('roles', rol);