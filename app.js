require('dotenv').config();
require('express-async-errors');
require('dotenv');
const express = require('express');
const app = express();

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// DB connection
const connectDB = require('./db/connect.js');

// router middlewares
const authMiddleware = require('./routes/auth.js');
const jobMiddleware = require('./routes/jobs.js');

app.use(express.json());
app.use('/api/v1/auth', authMiddleware);
app.use('/api/v1/jobs', jobMiddleware);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();