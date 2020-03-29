import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { Transaction } from './Transaction'
import { selectTransactionsList } from '../reducers'
import { getTransactions } from '../actions/transactions'

export const TransactionList = ({ transactions, getTransactions }) => {
    useEffect(() => {
        getTransactions()
    }, [])

    console.dir(transactions)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions &&
                    transactions.map(transaction => (
                        <Transaction
                            key={transaction._id}
                            transaction={transaction}
                        />
                    ))}
            </ul>
        </>
    )
}

// TODO specify propTypes

const mapStateToProps = state => ({
    transactions: selectTransactionsList(state),
})

const mapDispatchToProps = { getTransactions }

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
