var express = require('express');
var router = express.Router();

/* GET users listing. */
app.use((req, res) => {
    res.status(404).send(`
      <h1>404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <a href="/">Voltar para a página inicial</a>
    `)
})
  
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})


module.exports = router;