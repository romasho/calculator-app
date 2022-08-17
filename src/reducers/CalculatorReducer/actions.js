export const CLEAR = 'CLEAR'
export const CLEAR_ENTRY = 'CLEAR_ENTRY'
export const CALCULATE = 'CALCULATE'
export const ADD_OPERATOR = 'ADD_OPERATOR'
export const ADD_NUMBER = 'ADD_NUMBER'
export const CLEAR_HISTORY = 'CLEAR_HISTORY'
export const ADD_DOT = 'ADD_DOT'
export const BRACKETS = 'BRACKETS'
export const SWITCH_SIGN = 'SWITCH_SIGN'

export function clear() {
  return { type: CLEAR }
}

export function clearEntery() {
  return { type: CLEAR_ENTRY }
}

export function calculate(value) {
  return { type: CALCULATE, value }
}

export function addOperator(opertor) {
  return { type: ADD_OPERATOR, opertor }
}

export function addNumber(number) {
  return { type: ADD_NUMBER, number }
}

export function addDot() {
  return { type: ADD_DOT }
}

export function clearHistory() {
  return { type: CLEAR_HISTORY }
}

export function brackets(bracket) {
  return { type: BRACKETS, bracket }
}

export function switchSign() {
  return { type: SWITCH_SIGN }
}
