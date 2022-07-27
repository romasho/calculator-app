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
} from '@/reducers/CalculatorReducer/actions'

class ControlPanel extends React.Component {
  updateStr(el) {
    if (el.type === 'clear') {
      this.props.clearDisplay()
    } else if (el.type === 'clearEntry') {
      this.props.clearEnteryDisplay()
    } else if (el.type === 'equal') {
      this.props.calculateExpression()
    } else if (el.type === 'operators') {
      this.props.addOperator(el.value)
    } else {
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
            onClick={() => this.updateStr(el)}
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
    calculateExpression: () => {
      dispatch(calculate())
    },
    addOperator: operator => {
      dispatch(addOperator(operator))
    },
    addNumber: number => {
      dispatch(addNumber(number))
    },
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(ControlPanel)
