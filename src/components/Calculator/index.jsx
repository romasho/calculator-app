import React from 'react'

import Display from '@/components/Display'
import History from '@/components/History'
import ControlPanel from '@/components/ControlPanel'
import {
  CalculatorStore,
  AddCommand,
  SubCommand,
  MulCommand,
  DivCommand,
} from '@/helpers/calculator'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.calculator = new CalculatorStore()
    this.state = {
      displayValue: '',
      operator: null,
      isResettable: true,
      history: [],
      expression: '',
    }
    this.setCurrentValue = this.setCurrentValue.bind(this)
  }

  componentDidMount() {
    this.setState({
      displayValue: this.calculator.CurrentValue,
    })
  }

  swithCase(str, value) {
    const {
      displayValue,
      expression,
      history,
      operator,
    } = this.state

    switch (str) {
      case '+':
        this.calculator.execute(
          new AddCommand(displayValue),
        )
        this.setState({
          displayValue: this.calculator.CurrentValue,
          operator: value,
          isResettable: true,
          history: !operator
            ? [...history]
            : [expression, ...history],
        })
        break
      case '-':
        this.calculator.execute(
          new SubCommand(displayValue),
        )
        this.setState({
          displayValue: this.calculator.CurrentValue,
          operator: value,
          isResettable: true,
          history: !operator
            ? [...history]
            : [expression, ...history],
        })
        break
      case '*':
        this.calculator.execute(
          new MulCommand(displayValue),
        )
        this.setState({
          displayValue: this.calculator.CurrentValue,
          operator: value,
          isResettable: true,
          history: !operator
            ? [...history]
            : [expression, ...history],
        })
        break
      case '/':
        this.calculator.execute(
          new DivCommand(displayValue),
        )
        this.setState({
          displayValue: this.calculator.CurrentValue,
          operator: value,
          isResettable: true,
          history: !operator
            ? [...history]
            : [expression, ...history],
        })
        break
    }
  }

  setCurrentValue(el) {
    const { value, type } = el
    const {
      operator,
      displayValue,
      isResettable,
      expression,
    } = this.state
    if (type === 'number') {
      if (!operator) {
        this.calculator.setCurrentValue(value)
        this.setState({
          displayValue: this.calculator.CurrentValue,
          expression: `${this.calculator.CurrentValue}`,
        })
      } else if (isResettable) {
        this.setState({
          displayValue: value,
          expression: `${this.calculator.CurrentValue} ${operator} ${value}`,
          isResettable: false,
        })
      } else {
        const res =
          displayValue === '0' || !displayValue
            ? value
            : displayValue + value
        this.setState({
          displayValue: res,
          expression: `${this.calculator.CurrentValue} ${operator} ${res}`,
        })
      }
    } else if (type === 'operators') {
      if (operator) {
        this.swithCase(operator, value)
      }
      this.setState({
        operator: value,
        expression: `${expression} ${value}`,
      })
    } else if (type === 'clear') {
      this.calculator.clear()
      this.setState({
        displayValue: this.calculator.CurrentValue,
        operator: null,
        expression: '0',
      })
    } else if (type === 'clearEntry') {
      if (!isResettable) {
        this.setState({
          displayValue: 0,
          expression:
            this.calculator.CurrentValue + operator,
          isResettable: true,
        })
      } else {
        this.calculator.clear()
        this.setState({
          displayValue: this.calculator.CurrentValue,
          operator: null,
          expression: '0',
        })
      }
    } else if (type === 'equal') {
      this.swithCase(operator, value)
      this.setState({
        expression: this.calculator.CurrentValue,
      })
    } else if (type === 'dot') {
      if (!operator) {
        this.calculator.addDot()
        this.setState({
          displayValue: this.calculator.CurrentValue,
          expression: `${this.calculator.CurrentValue}`,
        })
      } else if (isResettable) {
        this.setState({
          displayValue: '0.',
          expression: `${this.calculator.CurrentValue} ${operator} 0.`,
          isResettable: false,
        })
      } else {
        const res =
          displayValue === '0' || !displayValue
            ? '0.'
            : displayValue
        this.setState({
          displayValue: res,
          expression: `${this.calculator.CurrentValue} ${operator} ${res}`,
        })
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Display displayValue={this.state.displayValue} />
        <ControlPanel
          setCurrentValue={this.setCurrentValue}
        />
        <History
          history={[
            this.state.expression,
            ...this.state.history,
          ]}
        />
      </React.Fragment>
    )
  }
}
