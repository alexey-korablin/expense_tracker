import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { selectTotalAmount } from '../selectors'

const Balance = ({ totalAmount }) => (
    <>
        <h4>Your Balance</h4>
        <h1>${totalAmount}</h1>
    </>
)

Balance.propTypes = {
    totalAmount: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    totalAmount: selectTotalAmount(state),
})

export default connect(mapStateToProps)(Balance)
