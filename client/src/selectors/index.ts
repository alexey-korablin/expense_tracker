import { Transaction, State } from '../interfaces'

export const selectTransactionsList = (state: State): Transaction[] =>
    state.transactions.transactions

export const selectTransactionsAmountList = (state: State) =>
    selectTransactionsList(state).map(transaction => transaction.amount)

export const selectTotalAmount = (state: State) =>
    selectTransactionsAmountList(state)
        .reduce((ack, amnt) => ack + amnt, 0)
        .toFixed(2)

export const selectIncomeExpence = (state: State, calculator: any) =>
    selectTransactionsAmountList(state)
        .reduce((ack, amount) => {
            return calculator(ack, amount)
        }, 0)
        .toFixed(2)
