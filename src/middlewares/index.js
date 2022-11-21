const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const auth = require('./auth');
const validateName = require('./validateName');
const validateAge = require('./validateAge');
const {
  validateTalk,
  validateWatchedAt,
  validateRate,
} = require('./validateTalk');

module.exports = { 
  validateEmail,
  validatePassword,
  auth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
};