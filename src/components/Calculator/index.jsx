import React from 'react'

import Display from '@/components/Display'
import History from '@/components/History'
import ControlPanel from '@/components/ControlPanel'

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
