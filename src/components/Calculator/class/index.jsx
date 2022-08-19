import React from 'react'

import Display from '@/components/Display/class'
import History from '@/components/History/class'
import ControlPanel from '@/components/ControlPanel/class'

export default class Calculator extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Display />
        <ControlPanel />
        <History />
      </React.Fragment>
    )
  }
}
