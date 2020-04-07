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
