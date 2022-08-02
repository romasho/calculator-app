import React from 'react'

import { ButtonsContainer } from './components'
import Button from '@/components/Button'
import { buttons } from '@/constants'

export default class ControlPanel extends React.Component {
  render() {
    return (
      <ButtonsContainer>
        {buttons.map(el => (
          <Button
            key={el.value}
            value={el.value}
            onClick={() => {
              this.props.setCurrentValue(el)
            }}
          />
        ))}
      </ButtonsContainer>
    )
  }
}
