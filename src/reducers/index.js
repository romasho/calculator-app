import { combineReducers } from 'redux'

import calculatorReducer from './CalculatorReducer'
import themeReducer from './ThemeReducer'

export const rootReducer = combineReducers({
  calculatorReducer,
  themeReducer,
})
