import React from 'react'
import { connect } from 'react-redux'

import { PageLayout } from '@/layouts'

import ThemeSelector from '@/components/ThemeSelector'
import BaseButton from '@/components/BaseButton'
import Checkbox from '@/components/Checkbox'
import { Card, Heading } from './components'
import { clearHistory } from '@/reducers/CalculatorReducer/actions'

class SettingPage extends React.Component {
  render() {
    return (
      <PageLayout>
        <Card>
          <Heading>Settings</Heading>
          <ThemeSelector />
          <BaseButton handleClick={this.props.clearHistory}>
            Clear All History
          </BaseButton>
          <Checkbox />
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
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(SettingPage)
