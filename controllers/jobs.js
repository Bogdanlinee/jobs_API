const JobSchema = require('../models/Job.js');
const { StatusCodes } = require('http-status-codes');

const getJob = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'getJob' });
}

const getAllJobs = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'getAllJobs' });
}

const createJob = async (req, res) => {
  const job = await JobSchema.create(req.body);
  console.log(job);
  res.status(StatusCodes.CREATED).json(req.user);
};

const changeJob = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'changeJob' });
};

const deleteJob = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'deleteJob' });
};

module.exports = { getJob, getAllJobs, createJob, changeJob, deleteJob };