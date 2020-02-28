const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const transaction = require('./routes/transactions');
const connectDB = require('./db');

dotenv.config({ path: './config.env' });

const app = express();

app.use('/api/v1/transactions', transaction);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
			.yellow.bold,
	),
);
