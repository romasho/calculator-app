import React from 'react'

import { CustomButton } from './components'

export default class Button extends React.Component {
  render() {
    console.log('render')
    return (
      <CustomButton
        onClick={this.props.onClick}
        {...this.props}>
        {this.props.value}
      </CustomButton>
    )
  }
}
