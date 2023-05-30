const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'register' })
}

const login = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'login' });
}

module.exports = { register, login };