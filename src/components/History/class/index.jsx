import React from 'react'
import { connect } from 'react-redux'
import {
  CustomDiv,
  Heading,
  HistoryExpression,
  DivWithCustomScroll,
} from '../components'

class History extends React.Component {
  render() {
    const {
      firstOperand,
      secondOperand,
      operator,
      history,
    } = this.props
    return (
      <CustomDiv visible={this.props.isHistoryVisible}>
        <Heading>History</Heading>
        <DivWithCustomScroll>
          {[
            {
              expression: `${firstOperand} ${operator} ${secondOperand}`,
              id: 'firstElem',
            },
            ...history,
          ].map(el => (
            <HistoryExpression key={el.id}>
              {el.expression}
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
    isHistoryVisible: state.themeReducer.isHistoryVisible,
  }
}

export default connect(
  mapStateToProps,
  null,
)(History)
