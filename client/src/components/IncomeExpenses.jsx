import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(t => t.amount)
    const incomeExpense = amounts.reduce(
        (ack, amount) => {
            if (amount > 0) {
                ack.inc += amount
            } else {
                ack.exp += amount * -1
            }
            return ack
        },
        { inc: 0, exp: 0 }
    )

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${incomeExpense.inc.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${incomeExpense.exp.toFixed(2)}</p>
            </div>
        </div>
    )
}
