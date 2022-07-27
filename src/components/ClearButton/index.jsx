import React from 'react'
import { connect } from 'react-redux'

import { clearHistory } from '@/reducers/CalculatorReducer/actions'

import { Button } from '@/components/ThemeSelector/components'

class ClearButton extends React.Component {
  render() {
    return (
      <Button onClick={() => this.props.clearHistory()}>
        Clear All History
      </Button>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearHistory: () => {
      dispatch(clearHistory())
    },
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(ClearButton)
