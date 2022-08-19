import React from 'react'
import { useSelector } from 'react-redux'

import { CustomInput } from '../components'

export default function Display() {
  const appState = useSelector(
    state => state.calculatorReducer,
  )
  const { secondOperand, firstOperand } = appState

  return (
    <CustomInput>
      {secondOperand || firstOperand}
    </CustomInput>
  )
}
