import React from 'react'
import { connect } from 'react-redux'

import { CustomInput } from './components'

class Display extends React.Component {
  render() {
    return (
      <CustomInput>
        {this.props.expressionString}
      </CustomInput>
    )
  }
}

const mapStateToProps = state => {
  return {
    expressionString:
      state.calculatorReducer.expressionString,
  }
}

export default connect(
  mapStateToProps,
  null,
)(Display)
