const repository = require ('../repositories/registro-repository')

exports.get = async (req, res, next) => {
    try {
        const data = await repository.get();
        if (!data || data.length === 0) {
            return res.status(404).send({ mensagem: "Nenhum dado encontrado" });
        }
        return res.status(200).send(data);
    } catch (error) {
        next(error);
    }
}

exports.post = async (req, res) => {
   
    const { body } = req;
    if (!body || Object.keys(body).length === 0) {
        return res.status(400).send({ mensagem: "Dados inválidos" });
    }
    await repository.create(body);
    res.status(201).send({ mensagem: "Criado com sucesso!" });
    
}

exports.put = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    if (!id || !body || Object.keys(body).length === 0) {
        return res.status(400).send({ mensagem: "Dados inválidos ou ID ausente" });
    }

    const updated = await repository.update(id, body);
    if (!updated) {
        return res.status(404).send({ mensagem: "Recurso não encontrado" });
    }

    res.status(204).send({ mensagem: "Atualizado com sucesso" });
}

exports.delete = async (req, res) => {

    const { id } = req.params;

    if (!id) {
        return res.status(400).send({ mensagem: "ID ausente" });
    }

    const deleted = await repository.delete(id);
    if (!deleted) {
        return res.status(404).send({ mensagem: "Recurso não encontrado" });
    }

    res.status(200).send({ mensagem: "Deletado com sucesso" });

}