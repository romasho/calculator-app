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
} from '@/reducers/CalculatorReducer/actions'

class ControlPanel extends React.Component {
  updateStr(el) {
    console.log('click')
    switch (el.type) {
      case 'clear':
        this.props.clearDisplay()
        break
      case 'clearEntry':
        this.props.clearEnteryDisplay()
        break
      case 'equal':
        this.props.calculateExpression()
        break
      case 'operators':
        this.props.addOperator(el.value)
        break
      case 'number':
        this.props.addNumber(el.value)
        break
      case 'dot':
        this.props.addDot()
        break
      case 'bracket':
        this.props.addBrackets(el.value)
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
            onClick={() => {
              this.updateStr(el)
            }}
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
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(ControlPanel)
