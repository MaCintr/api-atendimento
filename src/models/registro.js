const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const scheme = new Schema({
    ticket: {
        type: String,
        required: true,
        trim: true
    },
    hist_conversa:{
        type: String,
        required: true,
        trim: true
    },
    id_atendente:{
        type: Number,
        required: true
    },
    motivo:{
        type: String,
        required: true,
        trim: true
    }

})

module.exports = mongoose.model('Registro', scheme)