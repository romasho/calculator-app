import React from 'react'
import { connect } from 'react-redux'

import { CustomInput } from './components'

class Display extends React.Component {
  render() {
    const { expressionString } = this.props
    return <CustomInput>{expressionString}</CustomInput>
  }
}

const mapStateToProps = state => {
  return {
    expressionString: state.calculatorReducer.displayValue,
    state: state.calculatorReducer,
  }
}

export default connect(
  mapStateToProps,
  null,
)(Display)
