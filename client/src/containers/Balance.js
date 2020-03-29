import React from 'react'
import { connect } from 'react-redux'

import { selectTransactionsList } from '../reducers'

const Balance = ({ transactions }) => {
    // TODO create selectors for amounts and totalAmounts
    const amounts = transactions.map(transaction => transaction.amount)
    const totalAmount = amounts.reduce((ack, amnt) => ack + amnt, 0).toFixed(2)

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${totalAmount}</h1>
        </>
    )
}

// TODO specify propTypes

const mapStateToProps = state => ({
    transactions: selectTransactionsList(state),
})

export default connect(mapStateToProps)(Balance)
