import React from 'react'
import { useSelector } from 'react-redux'
import {
  CustomDiv,
  Heading,
  HistoryExpression,
  DivWithCustomScroll,
} from '../components'

export default function History() {
  const state = useSelector(
    state => state.calculatorReducer,
  )
  const {
    firstOperand,
    secondOperand,
    operator,
    history,
  } = state

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
