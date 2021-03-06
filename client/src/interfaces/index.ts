// TODO Split the interface file up
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

export interface State {
    transactions: TransactionState
}

export interface TransactionState {
    transactions: TransactionInterface[]
    error: string
    loading: boolean
}

export interface TransactionInterface {
    _id?: string
    text: string
    amount: number
    createdAt?: string
}

export interface InitialState {
    transactions: []
    error: string
    loading: boolean
}

// Action interfaces
export interface Action {
    type: string
    payload: string | TransactionInterface | Array<TransactionInterface>
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
    payload: TransactionInterface
}

interface AddTransactionActionFailure {
    type: typeof ADD_TRANSACTION_FAILURE
    payload: string
}

interface GetTransactionsAction {
    type: typeof GET_TRANSACTIONS
}

interface GetTransactionActionSuccess {
    type: typeof GET_TRANSACTIONS_SUCCESS
    payload: TransactionInterface[]
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
    | GetTransactionsAction
    | GetTransactionActionSuccess
    | GetTransactionActionFailure

export type TransactionActionTypes =
    | TransactionActionDeleteTypes
    | TransactionActionAddTypes
    | TransactionActionGetTypes

export interface TransactionListInterface {
    transactions: TransactionInterface[]
    getTransactions: any
}

export interface TransactionComponent {
    transaction: TransactionInterface
    onDeleteTransaction: any
}
