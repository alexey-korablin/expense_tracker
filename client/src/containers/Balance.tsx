import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import PropTypes from 'prop-types'

import { selectTotalAmount } from '../selectors'
import { State } from './../interfaces/index'

const mapStateToProps = (state: State) => ({
    totalAmount: selectTotalAmount(state),
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const Balance = ({ totalAmount }: PropsFromRedux): JSX.Element => (
    <>
        <h4>Your Balance</h4>
        <h1>${totalAmount}</h1>
    </>
)

Balance.propTypes = {
    totalAmount: PropTypes.string.isRequired,
}

export default connector(Balance)
