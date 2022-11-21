const express = require('express');
const bodyParser = require('body-parser');

const generateToken = require('./utils/generateToken');
const {
  getAllPeoples,
  getPeopleById,
  addNewTalker,
} = require('./talkerManager');

const { 
  validateEmail, 
  validatePassword,
  auth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
} = require('./middlewares/index');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const NOT_FOUND = 404;

const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

// Endpoints
app.post('/login', validateEmail, validatePassword, (req, res) => {
  const token = generateToken();
  res.status(HTTP_OK_STATUS).json({ token });
});

app.get('/talker', async (req, res) => {
  const response = await getAllPeoples();
  res.status(HTTP_OK_STATUS).json(response);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;

  const talker = await getPeopleById(id);

  if (talker) {
    res.status(HTTP_OK_STATUS).json(talker);
  } else {
    res.status(NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
  }
});

app.post('/talker',
  auth, 
  validateName, 
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
  const talker = req.body;
  const talkers = await getAllPeoples();

  talker.id = talkers.length + 1;

  await addNewTalker(talker);
  res.status(201).json(talker);
});
