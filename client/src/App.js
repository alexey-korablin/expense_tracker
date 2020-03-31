import React from 'react'
import './App.css'

import { Header } from './components/Header'
import Balance from './containers/Balance'
import IncomeExpenses from './containers/IncomeExpenses'
import TransactionList from './containers/TransactionList'
import AddTransaction from './containers/AddTransaction'

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </>
    )
}

export default App
