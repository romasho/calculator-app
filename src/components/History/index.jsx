import React from 'react'

import {
  CustomDiv,
  Heading,
  HistoryExpression,
  DivWithCustomScroll,
} from './components'

export default class History extends React.Component {
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
