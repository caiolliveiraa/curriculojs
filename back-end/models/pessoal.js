
const db = require('../db'); 

function getPersonalInfo() {
    return db.query('SELECT * FROM pessoal');
}

function createPersonalInfo(info) {
    return db.one('INSERT INTO pessoal (nome, titulo, resumo, email, telefone) VALUES ($1, $2, $3, $4, $5) RETURNING *', [info.nome, info.titulo, info.resumo, info.email, info.telefone]);
}

function updatePersonalInfo(id, info) {
    return db.one('UPDATE pessoal SET nome = $1, titulo = $2, resumo = $3, email = $4, telefone = $5 WHERE id = $6 RETURNING *', [info.nome, info.titulo, info.resumo, info.email, info.telefone, id]);
}

function deletePersonalInfo(id) {
    return db.none('DELETE FROM pessoal WHERE id = $1', [id]);
}

module.exports = {
    getPersonalInfo,
    createPersonalInfo,
    updatePersonalInfo,
    deletePersonalInfo
};
