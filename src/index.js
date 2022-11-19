const express = require('express');
const bodyParser = require('body-parser');

const { getAllPeoples } = require('./talkerManager');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

// Endpoints
app.get('/talker', async (req, res) => {
  const response = await getAllPeoples();
  res.status(HTTP_OK_STATUS).json(response);
});