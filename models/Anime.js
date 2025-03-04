const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: [{ type: String, required: true }],
  rating: { type: Number, min: 0, max: 10, required: true },
  status: { type: String, enum: ['assistido', 'assistindo', 'planejado'], required: true },
  coverImage: { type: String, required: true }
});

module.exports = mongoose.model('Anime', animeSchema);