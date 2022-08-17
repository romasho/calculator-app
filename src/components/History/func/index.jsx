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

  const isVisible = useSelector(
    state => state.themeReducer.isHistoryVisible,
  )
  const {
    firstOperand,
    secondOperand,
    operator,
    history,
  } = state

  return (
    <CustomDiv visible={isVisible}>
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
