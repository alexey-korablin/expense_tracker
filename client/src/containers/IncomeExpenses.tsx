import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import PropTypes from 'prop-types'

import { selectIncomeExpence } from '../selectors'
import { calculateIncome, calculateExpence } from '../utils'
import { State } from './../interfaces/index'

const mapStateToProps = (state: State) => ({
    income: selectIncomeExpence(state, calculateIncome),
    expence: selectIncomeExpence(state, calculateExpence),
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export const IncomeExpenses = ({
    income,
    expence,
}: PropsFromRedux): JSX.Element => (
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

export default connector(IncomeExpenses)

// export default connect(mapStateToProps)(IncomeExpenses)
