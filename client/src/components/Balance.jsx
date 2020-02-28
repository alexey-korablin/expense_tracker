import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const totalAmount = amounts.reduce((ack, amnt) => ack + amnt, 0).toFixed(2)

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${totalAmount}</h1>
        </>
    )
}
