import React from 'react'

import { Button } from './components'

export default class BaseButton extends React.Component {
  render() {
    return (
      <Button
        onClick={this.props.handleClick}
        light={this.props.light}
      >
        {this.props.children}
      </Button>
    )
  }
}
