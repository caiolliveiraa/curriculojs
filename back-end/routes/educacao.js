
const express = require('express');
const router = express.Router();
const Educacao = require('../models/educacao');

// Rota para obter informações de educação
router.get('/api/educacao', async (req, res) => {
    try {
        const educacao = await Educacao.getEducation();
        res.json(educacao);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar informações de educação.' });
    }
});

// Rota para criar informações de educação
router.post('/api/educacao', async (req, res) => {
    const info = req.body;
    try {
        const educacao = await Educacao.createEducation(info);
        res.json(educacao);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar informações de educação.' });
    }
});

// Rota para atualizar informações de educação
router.put('/api/educacao/:id', async (req, res) => {
    const id = req.params.id;
    const info = req.body;
    try {
        const educacao = await Educacao.updateEducation(id, info);
        res.json(educacao);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar informações de educação.' });
    }
});

// Rota para excluir informações de educação
router.delete('/api/educacao/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Educacao.deleteEducation(id);
        res.json({ message: 'Informações de educação excluídas com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir informações de educação.' });
    }
});

module.exports = router;
