import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)
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
