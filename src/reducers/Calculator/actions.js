export const CLEAR = 'CLEAR'
export const CLEAR_ENTRY = 'CLEAR_ENTRY'
export const CALCULATE = 'CALCULATE'
export const ADD_OPERATOR = 'ADD_OPERATOR'
export const ADD_NUMBER = 'ADD_NUMBER'
export const CLEAR_HISTORY = 'CLEAR_HISTORY'

export function clear() {
  return { type: CLEAR }
}

export function clearEntery() {
  return { type: CLEAR_ENTRY }
}

export function calculate() {
  return { type: CALCULATE }
}

export function addOperator(opertor) {
  return { type: ADD_OPERATOR, opertor }
}

export function addNumber(number) {
  return { type: ADD_NUMBER, number }
}

export function clearHistory() {
  return { type: CLEAR_HISTORY }
}
