//API para se conectar com o mongoDB e funcional para CRUD
const express = require('express');
const router = express.Router();
const Anime = require('../models/Anime');

// Cria um novo anime, serie ou filme.
router.post('/', async (req, res) => {
  try {
    const anime = new Anime(req.body);
    await anime.save();
    res.status(201).json(anime);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

// lista todos os animes, series ou filmes.
router.get('/', async (req, res) => {
  const animes = await Anime.find();
  res.json(animes);
});

// atualiza um anime, serie ou filme pelo ID
router.put('/:id', async (req, res) => {
  const anime = await Anime.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!anime) return res.status(404).json({ erro: 'Anime não encontrado' });
  res.json(anime);
});

// Exclui um anime, serie ou filme pelo ID
router.delete('/:id', async (req, res) => {
  const anime = await Anime.findByIdAndDelete(req.params.id);
  if (!anime) return res.status(404).json({ erro: 'Anime não encontrado' });
  res.json({ mensagem: 'Anime excluído' });
});

module.exports = router;