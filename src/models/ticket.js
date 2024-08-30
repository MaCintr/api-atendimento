const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const scheme = new Schema({
    id_pessoa: {
        type: Number,
        required: true
    },
    ticket: {
        type: String,
        required: true,
        trim: true
    },
    telefone:{
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Ticket', scheme)
