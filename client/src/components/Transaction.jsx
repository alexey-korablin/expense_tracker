import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)
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
                onClick={() => deleteTransaction(transaction._id)}
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
}
