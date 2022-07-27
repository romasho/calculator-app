import React from 'react'
import { connect } from 'react-redux'

import { lightTheme, darkTheme } from '@/theme'
import {
  applyLightTheme,
  applyDarkTheme,
} from '@/reducers/ThemeReducer/actions'

import DropDown from '../DropDown'
import { Button, Triangle } from './components'

const themes = ['Dark', 'Light']

class ThemeSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
      selected: this.props.themeName,
    }
    this.handleIsActive = this.handleIsActive.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(theme) {
    theme === 'Light'
      ? this.props.applyLightTheme(lightTheme)
      : this.props.applyDarkTheme(darkTheme)
    this.setState({ selected: theme })
  }

  handleIsActive() {
    this.setState(state => {
      return { isActive: !state.isActive }
    })
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Button light onClick={this.handleIsActive}>
          {this.state.selected} theme
        </Button>
        <Triangle />
        {this.state.isActive && (
          <DropDown
            ListItems={themes}
            show={this.state.isActive}
            onClickOutside={() =>
              this.setState({ isActive: false })
            }
            onHandleChange={this.handleChange}
            onHandleIsActive={this.handleIsActive}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    themeName: state.themeReducer.themeName,
    theme: state.themeReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    applyDarkTheme: payload => {
      dispatch(applyDarkTheme(payload))
    },
    applyLightTheme: payload => {
      dispatch(applyLightTheme(payload))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeSelector)
