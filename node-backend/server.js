const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/coins', (req, res) => {
  const coins = [
    { id: 1, name: 'Bitcoin' },
    { id: 2, name: 'Ethereum' },
    { id: 3, name: 'Litecoin' },
  ];
  res.json(coins);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
