import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addTransaction } from '../actions/transactions'

const AddTransaction = ({ addTransaction }) => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    const submitTransaction = e => {
        e.preventDefault()
        addTransaction({ text, amount })
        setText('')
        setAmount('')
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={submitTransaction}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        placeholder="Enter text..."
                        onChange={e => setText(e.currentTarget.value)}
                        value={text}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        placeholder="Enter amount..."
                        onChange={e => setAmount(+e.currentTarget.value)}
                        value={amount}
                    />
                </div>
                <button className="btn" type="submit">
                    Add Transaction
                </button>
            </form>
        </>
    )
}

AddTransaction.propTypes = {
    addTransaction: PropTypes.func.isRequired,
}

const mapDispatchToProps = { addTransaction }

export default connect(null, mapDispatchToProps)(AddTransaction)
