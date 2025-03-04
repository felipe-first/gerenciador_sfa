const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const animeRoutes = require('./routes/animeRoutes');

dotenv.config();
console.log('MONGODB_URI:', process.env.MONGODB_URI); // Debug

if (!process.env.MONGODB_URI) {
  console.error('Erro: MONGODB_URI não definida no .env');
  process.exit(1);
}

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar:', err));

app.use(express.json());
app.use('/api/animes', animeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));