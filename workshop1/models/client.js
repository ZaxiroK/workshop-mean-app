const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const client = new Schema({
    firstName: { type: String },
    lastName: { type: String }
});

module.exports = mongoose.model('clients', client);