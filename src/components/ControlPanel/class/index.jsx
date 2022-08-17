import React from 'react'
import { connect } from 'react-redux'

import { ButtonsContainer } from './components'
import Button from '@/components/Button'
import { buttons } from '@/constants'

import {
  clear,
  clearEntery,
  calculate,
  addOperator,
  addNumber,
  addDot,
  brackets,
  switchSign,
} from '@/reducers/CalculatorReducer/actions'
import {
  CLEAR,
  NUMBER,
  OPERATOR,
  EQUAL,
  DOT,
  BRACKET,
  CE,
  SWITCH,
} from '@/constants/index'

class ControlPanel extends React.Component {
  updateStr = el => () => {
    switch (el.type) {
      case CLEAR:
        this.props.clearDisplay()
        break
      case CE:
        this.props.clearEnteryDisplay()
        break
      case EQUAL:
        this.props.calculateExpression()
        break
      case OPERATOR:
        this.props.addOperator(el.value)
        break
      case NUMBER:
        this.props.addNumber(el.value)
        break
      case DOT:
        this.props.addDot()
        break
      case BRACKET:
        this.props.addBrackets(el.value)
        break
      case SWITCH:
        this.props.switchSign()
        break
      default:
        this.props.addNumber(el.value)
    }
  }

  render() {
    return (
      <ButtonsContainer>
        {buttons.map(el => (
          <Button
            key={el.value}
            value={el.value}
            onClick={this.updateStr(el)}
          />
        ))}
      </ButtonsContainer>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearDisplay: () => {
      dispatch(clear())
    },
    clearEnteryDisplay: () => {
      dispatch(clearEntery())
    },
    calculateExpression: value => {
      dispatch(calculate(value))
    },
    addOperator: operator => {
      dispatch(addOperator(operator))
    },
    addNumber: number => {
      dispatch(addNumber(number))
    },
    addDot: () => {
      dispatch(addDot())
    },
    addBrackets: bracket => {
      dispatch(brackets(bracket))
    },
    switchSign: () => {
      dispatch(switchSign())
    },
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(ControlPanel)
