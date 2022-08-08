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
    const {
      firstOperand,
      secondOperand,
      operator,
      history,
    } = this.props
    return (
      <CustomDiv>
        <Heading>History</Heading>
        <DivWithCustomScroll>
          {[
            `${firstOperand} ${operator ||
              ''} ${secondOperand || ''}`,
            ...history,
          ].map((el, index) => (
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
    firstOperand: state.calculatorReducer.firstOperand,
    secondOperand: state.calculatorReducer.secondOperand,
    operator: state.calculatorReducer.operator,
    history: state.calculatorReducer.history,
  }
}

export default connect(
  mapStateToProps,
  null,
)(History)
