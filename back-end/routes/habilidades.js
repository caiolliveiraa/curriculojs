
const express = require('express');
const router = express.Router();
const Habilidades = require('../models/habilidades');

// Rota para obter informações de habilidades
router.get('/api/habilidades', async (req, res) => {
    try {
        const habilidades = await Habilidades.getSkills();
        res.json(habilidades);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar informações de habilidades.' });
    }
});

// Rota para criar informações de habilidades
router.post('/api/habilidades', async (req, res) => {
    const info = req.body;
    try {
        const habilidade = await Habilidades.createSkill(info);
        res.json(habilidade);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar informações de habilidades.' });
    }
});

// Rota para atualizar informações de habilidades
router.put('/api/habilidades/:id', async (req, res) => {
    const id = req.params.id;
    const info = req.body;
    try {
        const habilidade = await Habilidades.updateSkill(id, info);
        res.json(habilidade);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar informações de habilidades.' });
    }
});

// Rota para excluir informações de habilidades
router.delete('/api/habilidades/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Habilidades.deleteSkill(id);
        res.json({ message: 'Informações de habilidades excluídas com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir informações de habilidades.' });
    }
});

module.exports = router;
