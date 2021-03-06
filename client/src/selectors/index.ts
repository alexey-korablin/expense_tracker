import { TransactionInterface, State } from '../interfaces'

export const selectTransactionsList = (state: State): TransactionInterface[] =>
    state.transactions.transactions

export const selectTransactionsAmountList = (state: State): number[] =>
    selectTransactionsList(state).map(
        (transaction: TransactionInterface): number => transaction.amount
    )

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
