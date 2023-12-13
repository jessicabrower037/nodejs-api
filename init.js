const express = require('express');
const app = express();
const port = 3001;

const data = {
  message: 'Look, A New API!',
  timestamp: new Date().toISOString(),
};

app.get('/api/data', (_req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
