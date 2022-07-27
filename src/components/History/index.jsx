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
    return (
      <CustomDiv>
        <Heading>History</Heading>
        <DivWithCustomScroll>
          {this.props.history.map((el, index) => (
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
  }
}

export default connect(
  mapStateToProps,
  null,
)(History)
