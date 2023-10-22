
const express = require('express');
const router = express.Router();
const Pessoal = require('../models/pessoal');

// Rota para obter informações pessoais
router.get('/routes/pessoal', async (req, res) => {
    try {
        const pessoal = await Pessoal.getPersonalInfo();
        res.json(pessoal);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar informações pessoais.' });
    }
});

// Rota para criar informações pessoais
router.post('/routes/pessoal', async (req, res) => {
    const info = req.body;
    try {
        const pessoal = await Pessoal.createPersonalInfo(info);
        res.json(pessoal);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar informações pessoais.' });
    }
});

// Rota para atualizar informações pessoais
router.put('/routes/pessoal/:id', async (req, res) => {
    const id = req.params.id;
    const info = req.body;
    try {
        const pessoal = await Pessoal.updatePersonalInfo(id, info);
        res.json(pessoal);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar informações pessoais.' });
    }
});

// Rota para excluir informações pessoais
router.delete('/routes/pessoal/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Pessoal.deletePersonalInfo(id);
        res.json({ message: 'Informações pessoais excluídas com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir informações pessoais.' });
    }
});

module.exports = router;
