import React from 'react'
import { useDispatch } from 'react-redux'

import { ButtonsContainer } from '../class/components'
import Button from '@/components/Button'
import { buttons } from '@/constants'

import {
  clear,
  clearEntery,
  calculate,
  addOperator,
  addNumber,
  addDot,
  brackets,
  switchSign,
} from '@/reducers/CalculatorReducer/actions'
import {
  CLEAR,
  NUMBER,
  OPERATOR,
  EQUAL,
  DOT,
  BRACKET,
  CE,
  SWITCH,
} from '@/constants/index'

export default function ControlPanel() {
  const dispatch = useDispatch()

  const updateStr = el => () => {
    switch (el.type) {
      case CLEAR:
        dispatch(clear())
        break
      case CE:
        dispatch(clearEntery())
        break
      case EQUAL:
        dispatch(calculate())
        break
      case OPERATOR:
        dispatch(addOperator(el.value))
        break
      case NUMBER:
        dispatch(addNumber(el.value))
        break
      case DOT:
        dispatch(addDot())
        break
      case BRACKET:
        dispatch(brackets(el.value))
        break
      case SWITCH:
        dispatch(switchSign())
        break
      default:
    }
  }

  return (
    <ButtonsContainer>
      {buttons.map(el => (
        <Button
          key={el.value}
          value={el.value}
          onClick={updateStr(el)}
        />
      ))}
    </ButtonsContainer>
  )
}
