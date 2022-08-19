import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CustomDiv,
  Heading,
  HistoryExpression,
  DivWithCustomScroll,
} from '../components'
import Button from '@/components/Button'
import { clearHistory } from '@/reducers/CalculatorReducer/actions'
import { toggleHide } from '@/reducers/settingsReducer/actions'

export default function History() {
  const dispatch = useDispatch()

  const {
    firstOperand,
    secondOperand,
    operator,
    history,
  } = useSelector(state => state.calculatorReducer)

  const { showHistory, showFullHistory } = useSelector(
    state => state.settingsReducer,
  )

  const handleClick = () => dispatch(clearHistory())
  const handleChangeHide = () => dispatch(toggleHide())

  const historyWithCurExpression = [
    {
      expression: `${firstOperand} ${operator} ${secondOperand}`,
      id: 'firstElem',
    },
    ...history,
  ]

  return (
    <CustomDiv visible={showHistory}>
      <Heading>History</Heading>
      <Button
        onClick={handleClick}
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
      {historyWithCurExpression.length > 8 && (
        <Button
          onClick={handleChangeHide}
          height="25px"
          width="25px"
          size="16px"
          value={showFullHistory ? '↑' : '↓'}
        />
      )}
    </CustomDiv>
  )
}
