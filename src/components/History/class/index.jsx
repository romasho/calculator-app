import React from 'react'
import { connect } from 'react-redux'

import {
  CustomDiv,
  Heading,
  HistoryExpression,
  DivWithCustomScroll,
} from '../components'
import Button from '@/components/Button'
import { clearHistory } from '@/reducers/CalculatorReducer/actions'
import { toggleHide } from '@/reducers/settingsReducer/actions'

class History extends React.Component {
  render() {
    const {
      firstOperand,
      secondOperand,
      operator,
      history,
      showFullHistory,
    } = this.props

    const historyWithCurExpression = [
      {
        expression: `${firstOperand} ${operator} ${secondOperand}`,
        id: 'firstElem',
      },
      ...history,
    ]

    return (
      <CustomDiv visible={this.props.showHistory}>
        {/* or {this.props.showHistory && <CustomDiv.... */}
        <Heading>History</Heading>
        <Button
          onClick={this.props.handleClick}
          height="50px"
          width="100px"
          size="32px"
          value="Clear"
        />
        <DivWithCustomScroll>
          {(showFullHistory
            ? historyWithCurExpression
            : historyWithCurExpression.slice(0, 8)
          ).map(el => (
            <HistoryExpression key={el.id}>
              {el.expression}
            </HistoryExpression>
          ))}
        </DivWithCustomScroll>
        <Button
          onClick={this.props.handleChangeHide}
          height="25px"
          width="25px"
          size="16px"
          value={showFullHistory ? '↑' : '↓'}
        />
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
    showHistory: state.settingsReducer.showHistory,
    showFullHistory: state.settingsReducer.showFullHistory,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => {
      dispatch(clearHistory())
    },
    handleChangeHide: () => {
      dispatch(toggleHide())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(History)
