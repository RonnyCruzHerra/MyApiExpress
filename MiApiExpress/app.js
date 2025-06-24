const express = require('express');
const app = express();
// Usa variable de entorno PORT o 80 por defecto
const port = process.env.PORT || 80;

app.get('/api/status', (req, res) => {
  res.json({ estado: 'ok' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
