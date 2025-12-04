const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/pilets.json', (req, res) => {
  res.json({
    items: [
      {
        name: 'auth-pilet',
        version: '1.0.0',
        link: 'http://localhost:8080/index.js',
        requireRef: 'auth-pilet',
        integrity: '',
        spec: 'v2'
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Pilet server running on http://localhost:${PORT}`);
  console.log(`Pilet bundle: http://localhost:${PORT}/index.js`);
  console.log(`Pilet feed: http://localhost:${PORT}/pilets.json`);
});
