const service = require("../services/userService");

exports.listar = (req, res) => {
    res.json(service.listarUsuarios());
};

exports.buscar = (req, res) => {
    const usuario = service.buscarUsuario(req.params.id);

    if (!usuario)
        return res.status(404).json({ mensagem: "Usuário não encontrado" });

    res.json(usuario);
};

exports.cadastrar = (req, res) => {
    try {
        const usuario = service.cadastrarUsuario(req.body);
        res.status(201).json(usuario);
    } catch (erro) {
        res.status(400).json({ mensagem: erro.message });
    }
};

exports.atualizar = (req, res) => {
    const usuario = service.atualizarUsuario(req.params.id, req.body);

    if (!usuario)
        return res.status(404).json({ mensagem: "Usuário não encontrado" });

    res.json(usuario);
};

exports.deletar = (req, res) => {
    const ok = service.deletarUsuario(req.params.id);

    if (!ok)
        return res.status(404).json({ mensagem: "Usuário não encontrado" });

    res.json({ mensagem: "Usuário removido com sucesso" });
};