
const db = require('../db');

function getSkills() {
    return db.query('SELECT * FROM habilidades');
}

function createSkill(info) {
    const { habilidade, resume_id } = info;
    return db.one('INSERT INTO habilidades (habilidade, resume_id) VALUES ($1, $2) RETURNING *', [habilidade, resume_id]);
}

function updateSkill(id, info) {
    const { habilidade } = info;
    return db.one('UPDATE habilidades SET habilidade = $1 WHERE id = $2 RETURNING *', [habilidade, id]);
}

function deleteSkill(id) {
    return db.none('DELETE FROM habilidades WHERE id = $1', [id]);
}

module.exports = {
    getSkills,
    createSkill,
    updateSkill,
    deleteSkill
};
