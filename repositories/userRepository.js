let usuarios = [];

exports.listar = () => usuarios;

exports.buscarPorId = (id) => {
    return usuarios.find(u => u.id == id);
};

exports.salvar = (usuario) => {
    usuario.id = usuarios.length + 1;
    usuarios.push(usuario);
    return usuario;
};

exports.atualizar = (id, dados) => {
    const usuario = usuarios.find(u => u.id == id);

    if (!usuario) return null;

    usuario.nome = dados.nome;
    usuario.email = dados.email;

    return usuario;
};

exports.deletar = (id) => {
    const indice = usuarios.findIndex(u => u.id == id);

    if (indice === -1) return false;

    usuarios.splice(indice, 1);

    return true;
};