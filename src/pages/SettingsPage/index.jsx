import React from 'react'
import { connect } from 'react-redux'

import { PageLayout } from '@/layouts'

import ThemeSelector from '@/components/ThemeSelector'
import BaseButton from '@/components/BaseButton'
import { Card, Heading } from './components'
import { clearHistory } from '@/reducers/CalculatorReducer/actions'
import { toggleVisibility } from '@/reducers/ThemeReducer/actions'

class SettingPage extends React.Component {
  render() {
    return (
      <PageLayout>
        <Card>
          <Heading>Settings</Heading>
          <ThemeSelector />
          <BaseButton handleClick={this.props.clearHistory}>
            Cleear All History
          </BaseButton>
          <label>
            Show History:
            <input
              type="checkbox"
              checked={this.props.isHistoryVisible}
              onChange={this.props.handleVisibility}
            />
          </label>
        </Card>
      </PageLayout>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearHistory: () => {
      dispatch(clearHistory())
    },
    handleVisibility: () => {
      dispatch(toggleVisibility())
    },
  }
}

const mapSateToProps = state => {
  return {
    isHistoryVisible: state.themeReducer.isHistoryVisible,
  }
}

export default connect(
  mapSateToProps,
  mapDispatchToProps,
)(SettingPage)
