export * from './actions'
export * from './router'

export const CLEAR = 'clear'
export const NUMBER = 'number'
export const OPERATOR = 'operator'
export const EQUAL = 'equal'
export const DOT = 'dot'
export const BRACKET = 'bracket'
export const CE = 'clearEntry'
export const SWITCH = 'switch'

export const buttons = [
  { value: 'C', type: CLEAR },
  { value: '7', type: NUMBER },
  { value: '8', type: NUMBER },
  { value: '9', type: NUMBER },
  { value: '*', type: OPERATOR },
  { value: '-', type: OPERATOR },
  { value: '4', type: NUMBER },
  { value: '5', type: NUMBER },
  { value: '6', type: NUMBER },
  { value: '/', type: OPERATOR },
  { value: '+', type: OPERATOR },
  { value: '1', type: NUMBER },
  { value: '2', type: NUMBER },
  { value: '3', type: NUMBER },
  { value: '=', type: EQUAL },
  { value: '.', type: DOT },
  { value: '(', type: BRACKET },
  { value: '0', type: NUMBER },
  { value: ')', type: BRACKET },
  { value: 'CE', type: CE },
  { value: '+/-', type: SWITCH },
]
