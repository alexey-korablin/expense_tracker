import React, { useContext, useEffect } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext)

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
