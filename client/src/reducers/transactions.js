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

const initialState = {
    transactions: [],
    error: '',
    loading: false,
}

// TODO change all action.transaction, action.error etc. to
// action.payload
const transactions = (state = initialState, action) => {
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
                transactions: [...state.transactions, action.transaction],
                loading: false,
            }
        case ADD_TRANSACTION_FAILURE:
            return {
                ...state,
                error: action.error,
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
                transactions: state.filter(
                    transaction => transaction._id !== action.id
                ),
            }
        case DELETE_TRANSACTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state
    }
}

export default transactions
