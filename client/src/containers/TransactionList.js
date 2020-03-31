import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Transaction from './Transaction'
import { selectTransactionsList } from '../selectors'
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

TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            _id: PropTypes.string.isRequired,
        })
    ),
    getTransactions: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    transactions: selectTransactionsList(state),
})

const mapDispatchToProps = { getTransactions }

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
