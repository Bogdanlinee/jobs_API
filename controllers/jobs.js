const JobSchema = require('../models/Job.js');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors/index.js');

const getJob = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'getJob' });
}

const getAllJobs = async (req, res) => {
  const jobs = await JobSchema.find({ createdBy: req.user.userId })
    .sort('-createdAt')
    .select('status company position createdAt -_id');
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
}

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await JobSchema.create(req.body);
  res.status(StatusCodes.CREATED).json(job);
};

const changeJob = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'changeJob' });
};

const deleteJob = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: 'deleteJob' });
};

module.exports = { getJob, getAllJobs, createJob, changeJob, deleteJob };