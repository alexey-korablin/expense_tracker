import { combineReducers } from 'redux'

import transactions from './transactions'

// Currently only one reducer
// Next step: add users reducer
const reducer = combineReducers(transactions)

export const selectTransactionsList = state => state.transactions

export default reducer
