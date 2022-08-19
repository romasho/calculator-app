import React from 'react'

import Display from '@/components/Display/func'
import History from '@/components/History/func'
import ControlPanel from '@/components/ControlPanel/func'

export default function Calculator() {
  return (
    <React.Fragment>
      <Display />
      <ControlPanel />
      <History />
    </React.Fragment>
  )
}
