const { StatusCodes } = require('http-status-codes');

const getJob = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'getJob' });
}

const getAllJobs = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'getAllJobs' });
}

const createJob = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'createJob' });
};

const changeJob = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'changeJob' });
};

const deleteJob = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'deleteJob' });
};

module.exports = { getJob, getAllJobs, createJob, changeJob, deleteJob };