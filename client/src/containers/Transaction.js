import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { deleteTransaction } from '../actions/transactions'

export const Transaction = ({ transaction, onDeleteTransaction }) => {
    const amountString =
        transaction.amount < 0
            ? `-$${transaction.amount * -1}`
            : `$${transaction.amount}`

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span>{amountString}</span>
            <button
                className="delete-btn"
                onClick={() => onDeleteTransaction(transaction._id)}
            >
                x
            </button>
        </li>
    )
}

Transaction.propTypes = {
    transaction: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
    }),
    onDeleteTransaction: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
    transaction: props.transaction,
})

const mapDispatchToProps = dispatch => ({
    onDeleteTransaction: id => dispatch(deleteTransaction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
