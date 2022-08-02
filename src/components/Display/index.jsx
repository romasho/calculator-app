import React from 'react'

import { CustomInput } from './components'

export default class Display extends React.Component {
  render() {
    const { displayValue } = this.props
    return <CustomInput>{displayValue}</CustomInput>
  }
}
