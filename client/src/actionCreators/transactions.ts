import { api } from '../api'
import {
    DELETE_TRANSACTION,
    DELETE_TRANSACTION_SUCCESS,
    DELETE_TRANSACTION_FAILURE,
} from '../actions'
import {
    ADD_TRANSACTION,
    ADD_TRANSACTION_SUCCESS,
    ADD_TRANSACTION_FAILURE,
} from '../actions'
import {
    GET_TRANSACTIONS,
    GET_TRANSACTIONS_SUCCESS,
    GET_TRANSACTIONS_FAILURE,
} from '../actions'
import { TransactionActionTypes, TransactionInterface } from '../interfaces'
import { Dispatch } from 'react'

type ConfigType = {
    'Content-Type': string
}

const gettingTransactions = (): TransactionActionTypes => ({
    type: GET_TRANSACTIONS,
})

const getTransactionsSuccess = (
    transactionsList: TransactionInterface[]
): TransactionActionTypes => ({
    type: GET_TRANSACTIONS_SUCCESS,
    payload: transactionsList,
})

const getTransactionsError = (error: string): TransactionActionTypes => ({
    type: GET_TRANSACTIONS_FAILURE,
    payload: error,
})

const addingTransaction = (): TransactionActionTypes => ({
    type: ADD_TRANSACTION,
})

const addTransactionSuccess = (
    transaction: TransactionInterface
): TransactionActionTypes => ({
    type: ADD_TRANSACTION_SUCCESS,
    payload: transaction,
})

const addTransactionError = (error: string): TransactionActionTypes => ({
    type: ADD_TRANSACTION_FAILURE,
    payload: error,
})

const deletingTransaction = (): TransactionActionTypes => ({
    type: DELETE_TRANSACTION,
})

const deleteTransactionSuccess = (id: string): TransactionActionTypes => ({
    type: DELETE_TRANSACTION_SUCCESS,
    payload: id,
})

const deleteTransactionError = (error: string): TransactionActionTypes => ({
    type: DELETE_TRANSACTION_FAILURE,
    payload: error,
})

export const addTransaction = (transaction: TransactionInterface) => {
    return async (dispatch: Dispatch<TransactionActionTypes>) => {
        dispatch(addingTransaction())
        const config = { headers: { 'Content-Type': 'application/json' } }
        try {
            const recentTransaction = await api.post('/', transaction, config)
            dispatch(addTransactionSuccess(recentTransaction.data.data))
        } catch (err) {
            dispatch(
                addTransactionError(err.response.data.error || err.message)
            )
        }
    }
}

export const getTransactions = () => {
    return async (dispatch: Dispatch<TransactionActionTypes>) => {
        dispatch(gettingTransactions())
        try {
            const transactions = await api.get('/')
            dispatch(getTransactionsSuccess(transactions.data.data))
        } catch (err) {
            dispatch(
                getTransactionsError(err.response.data.error || err.message)
            )
        }
    }
}

export const deleteTransaction = (id: string) => {
    return async (dispatch: Dispatch<TransactionActionTypes>) => {
        dispatch(deletingTransaction())
        try {
            await api.delete(`/${id}`)
            dispatch(deleteTransactionSuccess(id))
        } catch (err) {
            dispatch(
                deleteTransactionError(err.response.data.error || err.message)
            )
        }
    }
}
