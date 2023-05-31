const Users = require('../models/User.js');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors/index.js');

const register = async (req, res) => {
  const user = await Users.create(req.body);
  const token = user.getToken();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
}

const login = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'login' });
}

module.exports = { register, login };