import { combineReducers } from 'redux'

import transactions from './transactions'

// Currently only one reducer
// Next step: add users reducer
const reducer = combineReducers({ transactions })

export default reducer
// export type RootState = ReturnType<typeof reducer>
