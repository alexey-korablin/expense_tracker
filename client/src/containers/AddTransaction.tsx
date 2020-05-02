import React, { useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import PropTypes from 'prop-types'

import { addTransaction } from '../actionCreators/transactions'

const mapDispatchToProps = { addTransaction }

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Amount = number

const AddTransaction = ({ addTransaction }: PropsFromRedux): JSX.Element => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState<Amount>(0)

    const submitTransaction = (e: React.SyntheticEvent): void => {
        e.preventDefault()
        addTransaction({ text, amount })
        setText('')
        setAmount(0)
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
                        onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
                            setText(e.currentTarget.value)
                        }
                        value={text}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        placeholder="Enter amount..."
                        onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
                            setAmount(+e.currentTarget.value)
                        }
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

// const mapDispatchToProps = { addTransaction }

// export default connect(null, mapDispatchToProps)(AddTransaction)
export default connector(AddTransaction)
