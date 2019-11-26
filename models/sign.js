const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Sign = new Schema({
    name: { type: String, required: false },
    birthdate: { type: String, required: false },
    starSign: { type: String, required: false }
});

module.exports = mongoose.model('Sign', Sign);