const mongoose = require('mongoose')
const Ticket = mongoose.model('Ticket')

exports.get  = async() => {
    const result = await Ticket.find({})
    return result
}

exports.create = async(data) =>{
    const ticket = Ticket(data)
    await ticket.save()
}

exports.update = async(id, data) =>{
    await Ticket.findByIdAndUpdate(id, {
        $set:{
            id_pessoa: data.id_pessoa,
            ticket: data.ticket,
            telefone: data.telefone
        }
    })
}

exports.delete = async (id) => {
    const result = await Ticket.findByIdAndDelete(id);
    return result; // Retorna o resultado para saber se a operação foi bem-sucedida
}
