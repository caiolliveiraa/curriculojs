
const db = require('../db');

function getExperience() {
    return db.query('SELECT * FROM experiencia');
}

function createExperience(info) {
    const { cargo, empresa, periodo, descricao, resume_id } = info;
    return db.one('INSERT INTO experiencia (cargo, empresa, periodo, descricao, resume_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [cargo, empresa, periodo, descricao, resume_id]);
}

function updateExperience(id, info) {
    const { cargo, empresa, periodo, descricao } = info;
    return db.one('UPDATE experiencia SET cargo = $1, empresa = $2, periodo = $3, descricao = $4 WHERE id = $5 RETURNING *', [cargo, empresa, periodo, descricao, id]);
}

function deleteExperience(id) {
    return db.none('DELETE FROM experiencia WHERE id = $1', [id]);
}

module.exports = {
    getExperience,
    createExperience,
    updateExperience,
    deleteExperience
};
