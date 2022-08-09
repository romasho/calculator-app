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
} from '@/reducers/CalculatorReducer/actions'

export default function ControlPanel() {
  const dispatch = useDispatch()

  function updateStr(el) {
    switch (el.type) {
      case 'clear':
        dispatch(clear())
        break
      case 'clearEntry':
        dispatch(clearEntery())
        break
      case 'equal':
        dispatch(calculate())
        break
      case 'operators':
        dispatch(addOperator(el.value))
        break
      case 'number':
        dispatch(addNumber(el.value))
        break
      case 'dot':
        dispatch(addDot())
        break
      case 'bracket':
        dispatch(brackets(el.value))
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
          onClick={() => {
            updateStr(el)
          }}
        />
      ))}
    </ButtonsContainer>
  )
}
