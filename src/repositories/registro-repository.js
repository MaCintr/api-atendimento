const mongoose = require('mongoose')
const Registro = mongoose.model('Registro')

exports.get  = async() => {
    const result = await Registro.find({})
    return result
}

exports.create = async(data) =>{
    const registro = Registro(data)
    await registro.save()
}

exports.update = async(id, data) =>{
    await Registro.findByIdAndUpdate(id, {
        $set:{
            ticket: data.ticket,
            hist_conversa: data.hist_conversa,
            id_atendente: data.id_atendente,
            motivo: data.motivo
        }
    })
}

exports.delete = async (id) => {
    const result = await Registro.findByIdAndDelete(id);
    return result; // Retorna o resultado para saber se a operação foi bem-sucedida
}