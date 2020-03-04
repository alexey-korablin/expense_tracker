import React, { createContext, useReducer } from 'react'
import axios from 'axios'

import { appReducer } from './appReducer'

const api = axios.create({
    baseURL: '/api/v1/transactions',
})

const initialState = {
    transactions: [],
    error: '',
    loading: false,
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    async function getTransactions() {
        try {
            const transactions = await api.get('/')
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: transactions.data.data,
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error,
            })
        }
    }

    async function deleteTransaction(id) {
        try {
            const deletedTransaction = await api.delete(`/${id}`)
            // console.log(deletedTransaction)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id,
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error,
            })
        }
    }

    async function addTransaction(transaction) {
        const config = { 'Content-Type': 'application/json' }
        console.log('add transaction works')
        try {
            const recentTransaction = await api.post('/', transaction, config)
            console.log(recentTransaction)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: recentTransaction.data.data,
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error,
            })
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                loading: state.loading,
                error: state.error,
                getTransactions,
                deleteTransaction,
                addTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
