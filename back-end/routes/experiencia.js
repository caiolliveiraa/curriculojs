
const express = require('express');
const router = express.Router();
const Experiencia = require('../models/experiencia');

// Rota para obter informações de experiência
router.get('/routes/experiencia', async (req, res) => {
    try {
        const experiencia = await Experiencia.getExperience();
        res.json(experiencia);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar informações de experiência.' });
    }
});

// Rota para criar informações de experiência
router.post('/routes/experiencia', async (req, res) => {
    const info = req.body;
    try {
        const experiencia = await Experiencia.createExperience(info);
        res.json(experiencia);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar informações de experiência.' });
    }
});

// Rota para atualizar informações de experiência
router.put('/routes/experiencia/:id', async (req, res) => {
    const id = req.params.id;
    const info = req.body;
    try {
        const experiencia = await Experiencia.updateExperience(id, info);
        res.json(experiencia);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar informações de experiência.' });
    }
});

// Rota para excluir informações de experiência
router.delete('/routes/experiencia/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Experiencia.deleteExperience(id);
        res.json({ message: 'Informações de experiência excluídas com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir informações de experiência.' });
    }
});

module.exports = router;
