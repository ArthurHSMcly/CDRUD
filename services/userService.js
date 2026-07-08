const repository = require("../repositories/userRepository");

exports.listarUsuarios = () => repository.listar();

exports.buscarUsuario = (id) => repository.buscarPorId(id);

exports.cadastrarUsuario = (usuario) => {
    if (!usuario.nome || !usuario.email) {
        throw new Error("Nome e email são obrigatórios.");
    }

    return repository.salvar(usuario);
};

exports.atualizarUsuario = (id, dados) => {
    return repository.atualizar(id, dados);
};

exports.deletarUsuario = (id) => {
    return repository.deletar(id);
};