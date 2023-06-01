const express = require('express');
const router = express.Router();
const { getJob, getAllJobs, createJob, changeJob, deleteJob } = require('../controllers/jobs.js');
const auth = require('../middleware/authentication');

router.route('/').get(auth, getAllJobs).post(auth, createJob)
router.route('/:id').get(auth, getJob).patch(auth, changeJob).delete(auth, deleteJob);

module.exports = router;