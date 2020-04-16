// TODO Split the interface file up
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

export interface State {
    transactions: TransactionState
}

export interface TransactionState {
    transactions: Transaction[]
    error: string
    loading: boolean
}

export interface Transaction {
    _id: string
    text: string
    amount: number
    createdAt: string
}

export interface InitialState {
    transactions: []
    error: string
    loading: boolean
}

// Action interfaces
export interface Action {
    type: string
    payload: string | Transaction | Array<Transaction>
}

interface DeleteTransactionAction {
    type: typeof DELETE_TRANSACTION
}

interface DeleteTransactionActionSuccess {
    type: typeof DELETE_TRANSACTION_SUCCESS
    payload: string
}

interface DeleteTransactionActionFailure {
    type: typeof DELETE_TRANSACTION_FAILURE
    payload: string
}

interface AddTransactionAction {
    type: typeof ADD_TRANSACTION
}

interface AddTransactionActionSuccess {
    type: typeof ADD_TRANSACTION_SUCCESS
    payload: Transaction
}

interface AddTransactionActionFailure {
    type: typeof ADD_TRANSACTION_FAILURE
    payload: string
}

interface GetTransactionAction {
    type: typeof GET_TRANSACTIONS
}

interface GetTransactionActionSuccess {
    type: typeof GET_TRANSACTIONS_SUCCESS
    payload: Transaction[]
}

interface GetTransactionActionFailure {
    type: typeof GET_TRANSACTIONS_FAILURE
    payload: string
}

type TransactionActionDeleteTypes =
    | DeleteTransactionAction
    | DeleteTransactionActionSuccess
    | DeleteTransactionActionFailure

type TransactionActionAddTypes =
    | AddTransactionAction
    | AddTransactionActionSuccess
    | AddTransactionActionFailure

type TransactionActionGetTypes =
    | GetTransactionAction
    | GetTransactionActionSuccess
    | GetTransactionActionFailure

export type TransactionActionTypes =
    | TransactionActionDeleteTypes
    | TransactionActionAddTypes
    | TransactionActionGetTypes
