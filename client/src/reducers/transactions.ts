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

import {
    TransactionState,
    TransactionActionTypes,
    TransactionInterface,
} from '../interfaces'

const initialState: TransactionState = {
    transactions: [],
    error: '',
    loading: false,
}

const transactions = (
    state = initialState,
    action: TransactionActionTypes
): TransactionState => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state,
                loading: true,
                error: '',
            }
        case GET_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                transactions: [...action.payload],
                loading: false,
            }
        case GET_TRANSACTIONS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case ADD_TRANSACTION:
            return {
                ...state,
                loading: true,
                error: '',
            }
        case ADD_TRANSACTION_SUCCESS:
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
                loading: false,
            }
        case ADD_TRANSACTION_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case DELETE_TRANSACTION:
            return {
                ...state,
                loading: true,
                error: '',
            }
        case DELETE_TRANSACTION_SUCCESS:
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction: TransactionInterface) =>
                        transaction._id !== action.payload
                ),
            }
        case DELETE_TRANSACTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default transactions
