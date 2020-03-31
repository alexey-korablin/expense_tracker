import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { selectIncomeExpence } from '../selectors'
import { calculateIncome, calculateExpence } from '../utils'

export const IncomeExpenses = ({ income, expence }) => (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">+${income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">-${expence}</p>
        </div>
    </div>
)

IncomeExpenses.propTypes = {
    income: PropTypes.string.isRequired,
    expence: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    income: selectIncomeExpence(state, calculateIncome),
    expence: selectIncomeExpence(state, calculateExpence),
})

export default connect(mapStateToProps)(IncomeExpenses)
