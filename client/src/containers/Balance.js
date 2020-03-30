import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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

Balance.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            _id: PropTypes.string.isRequired,
        })
    ),
}

const mapStateToProps = state => ({
    transactions: selectTransactionsList(state),
})

export default connect(mapStateToProps)(Balance)
