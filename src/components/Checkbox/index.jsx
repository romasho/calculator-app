import React from 'react'
import { connect } from 'react-redux'

import { Label } from './components'
import { toggleVisibility } from '@/reducers/settingsReducer/actions'

class Checkbox extends React.Component {
  render() {
    return (
      <Label>
        Show History:
        <input
          type="checkbox"
          checked={this.props.showHistory}
          onChange={this.props.handleVisibility}
        />
      </Label>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleVisibility: () => {
      dispatch(toggleVisibility())
    },
  }
}

const mapSateToProps = state => {
  return {
    showHistory: state.settingsReducer.showHistory,
  }
}

export default connect(
  mapSateToProps,
  mapDispatchToProps,
)(Checkbox)
