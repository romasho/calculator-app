import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import calculatorReducer from './CalculatorReducer'
import settingsReducer from './settingsReducer'

const authPersistConfig = {
  key: 'calc',
  storage: storage,
  whitelist: ['history'],
}

export const rootReducer = combineReducers({
  calculatorReducer: persistReducer(
    authPersistConfig,
    calculatorReducer,
  ),
  settingsReducer,
})
