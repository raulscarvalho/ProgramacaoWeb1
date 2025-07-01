const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/search', async (req, res) => {
  const { astro } = req.body;
  if (!astro) return res.status(400).json({ error: 'Informe o nome do astro' });

  try {
    const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', {
      params: {
        start_date: '2024-06-01',
        end_date: '2024-06-30'
      }
    });

    const dados = response.data;
    const resultados = dados.filter(item =>
      item.explanation && item.explanation.toLowerCase().includes(astro.toLowerCase())
    );

    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados da API' });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));