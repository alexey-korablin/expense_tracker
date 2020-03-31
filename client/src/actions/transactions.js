import { api } from '../api'
import {
    DELETE_TRANSACTION,
    DELETE_TRANSACTION_SUCCESS,
    DELETE_TRANSACTION_FAILURE,
} from '../actionTypes'
import {
    ADD_TRANSACTION,
    ADD_TRANSACTION_SUCCESS,
    ADD_TRANSACTION_FAILURE,
} from '../actionTypes'
import {
    GET_TRANSACTIONS,
    GET_TRANSACTIONS_SUCCESS,
    GET_TRANSACTIONS_FAILURE,
} from '../actionTypes'

const gettingTransactions = () => ({
    type: GET_TRANSACTIONS,
})

const getTransactionsSuccess = transactionsList => ({
    type: GET_TRANSACTIONS_SUCCESS,
    payload: transactionsList,
})

const getTransactionsError = error => ({
    type: GET_TRANSACTIONS_FAILURE,
    payload: error,
})

const addingTransaction = () => ({
    type: ADD_TRANSACTION,
})

const addTransactionSuccess = transaction => ({
    type: ADD_TRANSACTION_SUCCESS,
    payload: transaction,
})

const addTransactionError = error => ({
    type: ADD_TRANSACTION_FAILURE,
    payload: error,
})

const deletingTransaction = () => ({
    type: DELETE_TRANSACTION,
})

const deleteTransactionSuccess = id => ({
    type: DELETE_TRANSACTION_SUCCESS,
    payload: id,
})

const deleteTransactionError = error => ({
    type: DELETE_TRANSACTION_FAILURE,
    payload: error,
})

export const addTransaction = transaction => {
    return async dispatch => {
        dispatch(addingTransaction())
        const config = { 'Content-Type': 'application/json' }
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
    return async dispatch => {
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

export const deleteTransaction = id => {
    return async dispatch => {
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
