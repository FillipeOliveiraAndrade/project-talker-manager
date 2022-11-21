const validateTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }

  return next();
};

const validateWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;

  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }

  const regex = /\d{2}\/\d{2}\/\d{4}/g;
  if (!regex.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  
  return next();
};

const validateRate = (req, res, next) => {
  const { talk: { rate } } = req.body;

  if (!rate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }

  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  return next();
};

module.exports = {
  validateTalk,
  validateWatchedAt,
  validateRate,
};
