import {
  CLEAR,
  CLEAR_ENTRY,
  CALCULATE,
  ADD_OPERATOR,
  ADD_NUMBER,
  CLEAR_HISTORY,
  ADD_DOT,
  BRACKETS,
} from './actions'
import {
  AddCommand,
  SubCommand,
  MulCommand,
  DivCommand,
} from '@/helpers/CalculatorPattern/command'

import CalculatorStore from '@/helpers/CalculatorPattern'
import { calculateExpression } from '@/helpers'

const calculator = new CalculatorStore()

function swithCase(str, displayValue) {
  switch (str) {
    case '+':
      calculator.execute(new AddCommand(displayValue))
      break
    case '-':
      calculator.execute(new SubCommand(displayValue))
      break
    case '*':
      calculator.execute(new MulCommand(displayValue))
      break
    case '/':
      calculator.execute(new DivCommand(displayValue))
      break
  }
}

const initialState = {
  displayValue: '0',
  operator: null,
  isResettable: true,
  history: [],
  expression: '',
  counterBrackets: 0,
  bracketExpression: '',
}

export default function calculatorReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case ADD_NUMBER:
      if (state.counterBrackets > 0 && !state.operator) {
        return {
          ...state,
          bracketExpression:
            state.bracketExpression + action.number,
          displayValue:
            state.bracketExpression + action.number,
          expression: state.bracketExpression + action.number,
        }
      } else if (state.counterBrackets > 0 && state.operator) {
        return {
          ...state,
          bracketExpression:
            state.bracketExpression + action.number,
          displayValue:
            state.bracketExpression + action.number,
          expression: state.expression + action.number,
        }
      } else if (!state.operator) {
        calculator.addToCurrentValue(action.number)
        return {
          ...state,
          displayValue: calculator.CurrentValue,
          expression: `${calculator.CurrentValue}`,
        }
      } else if (state.isResettable) {
        return {
          ...state,
          displayValue: action.number,
          expression: state.expression + action.number,
          isResettable: false,
        }
      } else {
        const res =
          state.displayValue === '0' || !state.displayValue
            ? action.number
            : state.displayValue + action.number
        return {
          ...state,
          displayValue: res,
          expression: state.expression + action.number,
        }
      }
    case ADD_OPERATOR:
      if (state.counterBrackets > 0) {
        return {
          ...state,
          bracketExpression:
            state.bracketExpression + action.opertor,
          displayValue:
            state.bracketExpression + action.opertor,
          expression: `${state.bracketExpression} ${action.opertor}`,
        }
      } else if (state.counterBrackets === 0 && state.bracketExpression) {
        calculator.setCurrentValue(calculateExpression(state.bracketExpression))
        return {
          ...state,
          displayValue: calculateExpression(state.bracketExpression),
          operator: action.opertor,
          isResettable: true,
          bracketExpression: '',
          expression: `${state.bracketExpression} ${action.opertor} `,
        }
      }
      else if (state.operator && !state.isResettable) {
        swithCase(state.operator, state.displayValue)
        return {
          ...state,
          displayValue: calculator.CurrentValue,
          operator: action.opertor,
          isResettable: true,
          expression: `${calculator.CurrentValue} ${action.opertor} `,
          history: !state.operator
            ? [...state.history]
            : [state.expression, ...state.history],
          bracketExpression: '',
        }
      } else {
        return {
          ...state,
          operator: action.opertor,
          expression: `${calculator.CurrentValue} ${action.opertor} `,
        }
      }
    case CALCULATE:
      if (state.bracketExpression) {
        swithCase(state.operator, calculateExpression(state.bracketExpression))
        return {
          ...state,
          displayValue: calculator.CurrentValue,
          operator: action.value,
          isResettable: true,
          expression: calculator.CurrentValue,
          history: !state.operator
            ? [...state.history]
            : [state.expression, ...state.history],
          bracketExpression: '',
        }
      } else {
        swithCase(state.operator, state.displayValue)
        return {
          ...state,
          displayValue: calculator.CurrentValue,
          operator: action.value,
          isResettable: true,
          expression: calculator.CurrentValue,
          history: !state.operator
            ? [...state.history]
            : [state.expression, ...state.history],
        }
      }
    case CLEAR_HISTORY:
      return {
        ...state,
        displayValue: 0,
        expressionString: '',
        history: [],
      }
    case ADD_DOT:
      if (!state.operator) {
        calculator.addDot()
        console.log('zero', calculator.CurrentValue)
        return {
          ...state,
          displayValue: calculator.CurrentValue,
          expression: `${calculator.CurrentValue}`,
        }
      } else if (state.isResettable) {
        return {
          ...state,
          displayValue: '0.',
          expression: `${calculator.CurrentValue} ${state.operator} 0.`,
          isResettable: false,
        }
      } else {
        const res =
          state.displayValue === '0' || !state.displayValue
            ? '0.'
            : !state.displayValue.includes('.')
              ? state.displayValue + '.'
              : state.displayValue
        return {
          ...state,
          displayValue: res,
          expression: `${calculator.CurrentValue} ${state.operator} ${res}`,
        }
      }
    case CLEAR:
      calculator.clear()
      return {
        ...state,
        displayValue: calculator.CurrentValue,
        operator: null,
        expression: '0',
        bracketExpression: '',
        counterBrackets: 0,
        isResettable: true,
      }
    case CLEAR_ENTRY:
      if (!state.isResettable) {
        return {
          ...state,
          displayValue: 0,
          expression:
            calculator.CurrentValue + state.operator,
          isResettable: true,
        }
      } else {
        calculator.clear()
        return {
          ...state,
          displayValue: calculator.CurrentValue,
          operator: null,
          expression: '0',
          counterBrackets: 0,
        }
      }
    case BRACKETS:
      if (action.bracket === '(') {
        return {
          ...state,
          counterBrackets: state.counterBrackets + 1,
          bracketExpression:
            state.bracketExpression + action.bracket,
          displayValue:
            state.displayValue === '0' ||
              !state.displayValue || state.isResettable
              ? action.bracket
              : state.displayValue + action.bracket,
          isResettable: state.isResettable ? !state.isResettable : state.isResettable,
        }
      } else {
        return {
          ...state,
          counterBrackets:
            state.counterBrackets > 0
              ? state.counterBrackets - 1
              : state.counterBrackets,
          bracketExpression:
            state.bracketExpression +
            (state.counterBrackets > 0
              ? action.bracket
              : ''),
          displayValue:
            state.counterBrackets > 0
              ? state.displayValue + action.bracket
              : state.displayValue,
          expression: state.counterBrackets > 0
            ? state.expression + action.bracket
            : state.expression,
        }
      }

    default:
      return state
  }
}
