export const selectTransactionsList = state => state.transactions.transactions

export const selectTransactionsAmountList = state =>
    selectTransactionsList(state).map(transaction => transaction.amount)

export const selectTotalAmount = state =>
    selectTransactionsAmountList(state)
        .reduce((ack, amnt) => ack + amnt, 0)
        .toFixed(2)

export const selectIncomeExpence = (state, calculator) =>
    selectTransactionsAmountList(state)
        .reduce((ack, amount) => {
            return calculator(ack, amount)
        }, 0)
        .toFixed(2)
