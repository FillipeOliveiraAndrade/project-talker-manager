const fs = require('fs').promises;
const path = require('path');

const getAllPeoples = async () => {
  try {
    const response = await fs.readFile(path.resolve('src', 'talker.json'));
    const data = JSON.parse(response);
    return data;
  } catch (err) {
    console.log(`Erro ao ler o arquivo: ${err.message}`);
  }
};

const getPeopleById = async (id) => {
  try {
    const response = await getAllPeoples();
    const people = response.find((item) => item.id === Number(id));
    return people;
  } catch (err) {
    console.log(`Erro ao ler o arquivo: ${err.message}`);
  }
};

const addNewTalker = async (talker) => {
  try {
    const talkers = await getAllPeoples();
    talkers.push(talker);
    return await fs.writeFile(path.resolve('src', 'talker.json'), JSON.stringify(talkers));
  } catch (err) {
    console.log(`Erro ao executar o arquivo: ${err.message}`);
  }
};

module.exports = { 
  getAllPeoples,
  getPeopleById,
  addNewTalker,
};