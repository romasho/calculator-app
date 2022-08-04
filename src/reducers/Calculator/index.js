import {
  CLEAR,
  CLEAR_ENTRY,
  CALCULATE,
  ADD_OPERATOR,
  ADD_NUMBER,
  CLEAR_HISTORY,
} from './actions'
import { calculateExpression } from '@/helpers/index'

const initialState = {
  expressionString: '',
  history: [],
}

const operators = ['/', '+', '*', '-', '.']

export default function calculatorReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case CLEAR:
      return {
        ...state,
        expressionString: '',
      }
    case CLEAR_ENTRY:
      return {
        ...state,
        expressionString: state.expressionString
          .toString()
          .match(/[^\d()]+|[\d.]+|[()]/g)
          .slice(0, -1)
          .join(''),
      }
    case CALCULATE:
      return {
        history: [
          ...state.history,
          state.expressionString
            .toString()
            .match(/[^\d()]+|[\d.]+|[()]/g)
            .join(' '),
        ],
        expressionString: calculateExpression(
          state.expressionString,
        ),
      }
    case ADD_OPERATOR:
      if (state.expressionString.length < 1) return state
      if (
        !operators.includes(
          state.expressionString[
            state.expressionString.length - 1
          ],
        )
      ) {
        return {
          ...state,
          expressionString:
            state.expressionString + action.opertor,
        }
      } else {
        return {
          ...state,
          expressionString:
            state.expressionString.slice(0, -1) +
            action.opertor,
        }
      }
    case ADD_NUMBER:
      return {
        ...state,
        expressionString:
          state.expressionString + action.number,
      }
    case CLEAR_HISTORY:
      return {
        ...state,
        expressionString: '',
        history: [],
      }
    default:
      return state
  }
}
