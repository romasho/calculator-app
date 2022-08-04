import React from 'react'
import { connect } from 'react-redux'
import {
  CustomDiv,
  Heading,
  HistoryExpression,
  DivWithCustomScroll,
} from './components'

class History extends React.Component {
  render() {
    const { history, expression } = this.props
    return (
      <CustomDiv>
        <Heading>History</Heading>
        <DivWithCustomScroll>
          {[expression, ...history].map((el, index) => (
            <HistoryExpression key={index}>
              {el}
            </HistoryExpression>
          ))}
        </DivWithCustomScroll>
      </CustomDiv>
    )
  }
}

const mapStateToProps = state => {
  return {
    history: state.calculatorReducer.history,
    expression: state.calculatorReducer.expression,
  }
}

export default connect(
  mapStateToProps,
  null,
)(History)
