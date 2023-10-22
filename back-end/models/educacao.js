
const db = require('../db');

function getEducation() {
    return db.query('SELECT * FROM educacao');
}

function createEducation(info) {
    const { instituicao, curso, periodo, resume_id } = info;
    return db.one('INSERT INTO educacao (instituicao, curso, periodo, resume_id) VALUES ($1, $2, $3, $4) RETURNING *', [instituicao, curso, periodo, resume_id]);
}

function updateEducation(id, info) {
    const { instituicao, curso, periodo } = info;
    return db.one('UPDATE educacao SET instituicao = $1, curso = $2, periodo = $3 WHERE id = $4 RETURNING *', [instituicao, curso, periodo, id]);
}

function deleteEducation(id) {
    return db.none('DELETE FROM educacao WHERE id = $1', [id]);
}

module.exports = {
    getEducation,
    createEducation,
    updateEducation,
    deleteEducation
};
