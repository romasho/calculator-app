import React from 'react'
import { connect } from 'react-redux'

import { CustomInput } from './components'

class Display extends React.Component {
  render() {
    console.log(this.props.state)
    const { firstOperand, secondOperand } = this.props
    return (
      <CustomInput>
        {secondOperand || firstOperand}
      </CustomInput>
    )
  }
}

const mapStateToProps = state => {
  return {
    firstOperand: state.calculatorReducer.firstOperand,
    secondOperand: state.calculatorReducer.secondOperand,
    state: state.calculatorReducer,
  }
}

export default connect(
  mapStateToProps,
  null,
)(Display)
