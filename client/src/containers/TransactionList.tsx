import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
// import PropTypes from 'prop-types'

import { Transaction } from './Transaction'
import { selectTransactionsList } from '../selectors'
import { getTransactions, deleteTransaction } from '../actions/transactions'
import { State, TransactionInterface } from '../interfaces'

const mapStateToProps = (state: State) => ({
    transactions: selectTransactionsList(state),
})

const mapDispatchToProps = (dispatch: any) => ({
    getTransactions: () => dispatch(getTransactions()),
    onDeleteTransaction: (id: string) => dispatch(deleteTransaction(id)),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export const TransactionList = ({
    transactions,
    getTransactions,
    onDeleteTransaction,
}: PropsFromRedux): JSX.Element => {
    useEffect(() => {
        getTransactions()
    }, [])

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions &&
                    transactions.map((transaction: TransactionInterface) => {
                        return (
                            <Transaction
                                key={transaction._id}
                                transaction={transaction}
                                onDeleteTransaction={onDeleteTransaction}
                            />
                        )
                    })}
            </ul>
        </>
    )
}

// TransactionList.propTypes = {
//     transactions: PropTypes.arrayOf(
//         PropTypes.shape({
//             text: PropTypes.string.isRequired,
//             amount: PropTypes.number.isRequired,
//             _id: PropTypes.string.isRequired,
//         })
//     ),
//     getTransactions: PropTypes.func.isRequired,
//     onDeleteTransaction: PropTypes.func.isRequired,
// }

export default connector(TransactionList)
