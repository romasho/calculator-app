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

const operators = ['/', '+', '*', '-', '.']

function swithCase(str, operand) {
  switch (str) {
    case '+':
      calculator.execute(new AddCommand(operand))
      break
    case '-':
      calculator.execute(new SubCommand(operand))
      break
    case '*':
      calculator.execute(new MulCommand(operand))
      break
    case '/':
      calculator.execute(new DivCommand(operand))
      break
  }
}

const initialState = {
  firstOperand: 0,
  secondOperand: '',
  operator: null,
  history: [],
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
          firstOperand:
            state.bracketExpression + action.number,
        }
      } else if (
        state.counterBrackets > 0 &&
        state.operator
      ) {
        return {
          ...state,
          bracketExpression:
            state.bracketExpression + action.number,
          secondOperand:
            state.bracketExpression + action.number,
        }
      } else if (!state.operator) {
        calculator.addToCurrentValue(action.number)
        return {
          ...state,
          firstOperand: calculator.CurrentValue,
        }
      } else {
        const res =
          state.secondOperand === '0' ||
          !state.secondOperand
            ? action.number
            : state.secondOperand + action.number
        return {
          ...state,
          secondOperand: res,
        }
      }
    case ADD_OPERATOR:
      if (state.counterBrackets > 0) {
        const isLastOperator = operators.includes(
          state.bracketExpression[
            state.bracketExpression.length - 1
          ],
        )
        const res = isLastOperator
          ? state.bracketExpression.slice(0, -1) +
            action.opertor
          : state.bracketExpression + action.opertor
        return {
          ...state,
          bracketExpression: res,
          firstOperand: !state.operator
            ? res
            : state.firstOperand,
          secondOperand: state.operator ? res : 0,
        }
      } else if (
        state.counterBrackets === 0 &&
        state.bracketExpression
      ) {
        calculator.setCurrentValue(
          calculateExpression(state.bracketExpression),
        )
        return {
          ...state,
          firstOperand: calculateExpression(
            state.bracketExpression,
          ),
          secondOperand: '',
          operator: action.opertor,
          bracketExpression: '',
          history: [
            state.bracketExpression,
            ...state.history,
          ],
        }
      } else if (state.operator && state.secondOperand) {
        swithCase(state.operator, state.secondOperand)
        return {
          ...state,
          firstOperand: calculator.CurrentValue,
          secondOperand: '',
          operator: action.opertor,
          bracketExpression: '',
          history: [
            `${state.firstOperand} ${state.operator} ${state.secondOperand}`,
            ...state.history,
          ],
        }
      } else {
        return {
          ...state,
          operator: action.opertor,
        }
      }
    case CALCULATE:
      if (state.bracketExpression && state.secondOperand) {
        swithCase(
          state.operator,
          calculateExpression(
            state.bracketExpression +
              ')'.repeat(state.counterBrackets),
          ),
        )
        return {
          ...state,
          firstOperand: calculator.CurrentValue,
          counterBrackets: 0,
          secondOperand: '',
          operator: action.value,
          bracketExpression: '',
          history: [
            `${state.firstOperand} ${
              state.operator
            } ${state.secondOperand +
              ')'.repeat(state.counterBrackets)}`,
            ...state.history,
          ],
        }
      } else if (
        state.bracketExpression &&
        !state.secondOperand
      ) {
        calculator.setCurrentValue(
          calculateExpression(
            state.bracketExpression +
              ')'.repeat(state.counterBrackets),
          ),
        )
        return {
          ...state,
          firstOperand: calculateExpression(
            state.bracketExpression +
              ')'.repeat(state.counterBrackets),
          ),
          secondOperand: '',
          operator: action.value,
          bracketExpression: '',
          history: [
            `${state.firstOperand +
              ')'.repeat(state.counterBrackets)}`,
            ...state.history,
          ],
          counterBrackets: 0,
        }
      } else {
        swithCase(state.operator, state.secondOperand)
        return {
          ...state,
          firstOperand: calculator.CurrentValue,
          secondOperand: '',
          operator: action.value,
          history: [
            `${state.firstOperand} ${state.operator} ${state.secondOperand}`,
            ...state.history,
          ],
        }
      }
    case CLEAR_HISTORY:
      return {
        ...state,
        firstOperand: 0,
        history: [],
      }
    case ADD_DOT:
      if (state.bracketExpression) {
        const lastElement = state.bracketExpression
          .match(/[^\d()]+|[\d.]+|[()]/g)
          .pop()

        const res =
          /\d/.test(lastElement) &&
          !lastElement.includes('.')
            ? state.bracketExpression + '.'
            : state.bracketExpression

        console.log(lastElement)
        return {
          ...state,
          bracketExpression: res,
          firstOperand: !state.operator
            ? res
            : state.firstOperand,
          secondOperand: state.operator ? res : 0,
        }
      } else if (!state.operator) {
        calculator.addDot()
        return {
          ...state,
          firstOperand: calculator.CurrentValue,
        }
      } else {
        const res =
          state.secondOperand === '0' ||
          !state.secondOperand
            ? '0.'
            : !state.secondOperand.includes('.')
            ? state.secondOperand + '.'
            : state.secondOperand
        return {
          ...state,
          secondOperand: res,
        }
      }
    case CLEAR:
      calculator.clear()
      return {
        ...state,
        firstOperand: calculator.CurrentValue,
        secondOperand: '',
        operator: null,
        bracketExpression: '',
        counterBrackets: 0,
      }
    case CLEAR_ENTRY:
      if (state.secondOperand) {
        return {
          ...state,
          secondOperand: 0,
          bracketExpression: '',
          counterBrackets: 0,
        }
      } else {
        calculator.clear()
        return {
          ...state,
          firstOperand: calculator.CurrentValue,
          operator: null,
          counterBrackets: 0,
          bracketExpression: '',
        }
      }
    case BRACKETS:
      if (action.bracket === '(') {
        return {
          ...state,
          counterBrackets: state.counterBrackets + 1,
          bracketExpression:
            state.bracketExpression + action.bracket,
          firstOperand: !state.operator
            ? state.firstOperand === '0' ||
              !state.firstOperand
              ? action.bracket
              : state.firstOperand + action.bracket
            : state.firstOperand,
          secondOperand: state.operator
            ? state.secondOperand === '0' ||
              !state.secondOperand
              ? action.bracket
              : state.secondOperand + action.bracket
            : state.secondOperand,
        }
      } else {
        const expr =
          state.bracketExpression +
          (state.counterBrackets > 0
            ? state.bracketExpression[
                state.bracketExpression.length - 1
              ] === '('
              ? '0)'
              : action.bracket
            : '')
        return {
          ...state,
          counterBrackets:
            state.counterBrackets > 0
              ? state.counterBrackets - 1
              : state.counterBrackets,
          bracketExpression: expr,
          firstOperand: !state.operator
            ? expr
            : state.firstOperand,
          secondOperand: state.operator
            ? expr
            : state.secondOperand,
        }
      }

    default:
      return state
  }
}
