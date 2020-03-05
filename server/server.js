const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');

const transaction = require('./routes/transactions');
const connectDB = require('./db');

dotenv.config({ path: './config.env' });

connectDB();

const app = express();

app.use(express.json());

// Development mode
// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transaction);

// Production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../client', 'build', 'index.html'),
    ),
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .yellow.bold,
  ),
);
