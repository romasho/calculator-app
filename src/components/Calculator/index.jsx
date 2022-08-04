import React from 'react'

import Display from '@/components/Display'
import History from '@/components/History'
import ControlPanel from '@/components/ControlPanel'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayValue: '',
      operator: null,
      isResettable: true,
      history: [],
      expression: '',
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     displayValue: this.calculator.CurrentValue,
  //   })
  // }

  // swithCase(str, displayValue) {
  //   switch (str) {
  //     case '+':
  //       this.calculator.execute(
  //         new AddCommand(displayValue),
  //       )
  //       break
  //     case '-':
  //       this.calculator.execute(
  //         new SubCommand(displayValue),
  //       )
  //       break
  //     case '*':
  //       this.calculator.execute(
  //         new MulCommand(displayValue),
  //       )
  //       break
  //     case '/':
  //       this.calculator.execute(
  //         new DivCommand(displayValue),
  //       )
  //       break
  //   }
  // }

  // setCurrentValue(el) {
  //   const { value, type } = el
  //   const {
  //     operator,
  //     displayValue,
  //     isResettable,
  //     expression,
  //     history,
  //   } = this.state
  //   if (type === 'number') {
  //     if (!operator) {
  //       this.calculator.addToCurrentValue(value)
  //       this.setState({
  //         displayValue: this.calculator.CurrentValue,
  //         expression: `${this.calculator.CurrentValue}`,
  //       })
  //     } else if (isResettable) {
  //       this.setState({
  //         displayValue: value,
  //         expression: `${this.calculator.CurrentValue} ${operator} ${value}`,
  //         isResettable: false,
  //       })
  //     } else {
  //       const res =
  //         displayValue === '0' || !displayValue
  //           ? value
  //           : displayValue + value
  //       this.setState({
  //         displayValue: res,
  //         expression: `${this.calculator.CurrentValue} ${operator} ${res}`,
  //       })
  //     }
  //   } else if (type === 'operators') {
  //     if (operator && !isResettable) {
  //       this.swithCase(operator, displayValue)
  //       this.setState({
  //         displayValue: this.calculator.CurrentValue,
  //         operator: value,
  //         isResettable: true,
  //         expression: `${this.calculator.CurrentValue} ${value}`,
  //         history: !operator
  //           ? [...history]
  //           : [expression, ...history],
  //       })
  //     } else {
  //       this.setState({
  //         operator: value,
  //         expression: `${this.calculator.CurrentValue} ${value}`,
  //       })
  //     }
  //   } else if (type === 'clear') {
  //     this.calculator.clear()
  //     this.setState({
  //       displayValue: this.calculator.CurrentValue,
  //       operator: null,
  //       expression: '0',
  //     })
  //   } else if (type === 'clearEntry') {
  //     if (!isResettable) {
  //       this.setState({
  //         displayValue: 0,
  //         expression:
  //           this.calculator.CurrentValue + operator,
  //         isResettable: true,
  //       })
  //     } else {
  //       this.calculator.clear()
  //       this.setState({
  //         displayValue: this.calculator.CurrentValue,
  //         operator: null,
  //         expression: '0',
  //       })
  //     }
  //   } else if (type === 'equal') {
  //     this.swithCase(operator, displayValue)
  //     this.setState({
  //       displayValue: this.calculator.CurrentValue,
  //       operator: value,
  //       isResettable: true,
  //       expression: this.calculator.CurrentValue,
  //       history: !operator
  //         ? [...history]
  //         : [expression, ...history],
  //     })
  //   } else if (type === 'dot') {
  //     if (!operator) {
  //       this.calculator.addDot()
  //       this.setState({
  //         displayValue: this.calculator.CurrentValue,
  //         expression: `${this.calculator.CurrentValue}`,
  //       })
  //     } else if (isResettable) {
  //       this.setState({
  //         displayValue: '0.',
  //         expression: `${this.calculator.CurrentValue} ${operator} 0.`,
  //         isResettable: false,
  //       })
  //     } else {
  //       const res =
  //         displayValue === '0' || !displayValue
  //           ? '0.'
  //           : !displayValue.includes('.')
  //           ? displayValue + '.'
  //           : displayValue
  //       this.setState({
  //         displayValue: res,
  //         expression: `${this.calculator.CurrentValue} ${operator} ${res}`,
  //       })
  //     }
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <Display
        // displayValue={this.state.displayValue}
        />
        <ControlPanel
        // setCurrentValue={this.setCurrentValue}
        />
        <History
        // history={[
        //   this.state.expression,
        //   ...this.state.history,
        // ]}
        />
      </React.Fragment>
    )
  }
}
