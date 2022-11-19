const fs = require('fs').promises;
const path = require('path');

const getAllPeoples = async () => {
  try {
    const response = await fs.readFile(path.resolve(__dirname, './talker.json'));
    const data = JSON.parse(response);
    return data;
  } catch (err) {
    console.log(`Erro ao let o arquivo: ${err.message}`);
  }
};

module.exports = { 
  getAllPeoples,
};