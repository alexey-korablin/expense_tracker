const Transaction = require('../models/Transaction');

// @Desc    Get all transactions
// @route   GET api/v1/transactions
// @access  Public
exports.getTransactions = (req, res, next) => {
	res.send('GET transactions');
};

// @Desc    Add a transaction
// @route   POST api/v1/transactions
// @access  Public
exports.addTransaction = (req, res, next) => {
	res.send('POST transactions');
};

// @Desc    Delete transaction
// @route   DELETE api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = (req, res, next) => {
	res.send('DELETE transactions');
};
