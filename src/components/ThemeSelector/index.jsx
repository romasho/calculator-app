import React from 'react'
import { connect } from 'react-redux'

import { lightTheme, darkTheme } from '@/theme'
import {
  applyLightTheme,
  applyDarkTheme,
} from '@/reducers/ThemeReducer/actions'

import DropDown from '../DropDown'
import BaseButton from '../BaseButton'
import { Triangle } from './components'

const themes = ['Dark', 'Light']

class ThemeSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
      selected: this.props.themeName,
    }
    this.onClick = this.onClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(theme) {
    theme === 'Light'
      ? this.props.applyLightTheme(lightTheme)
      : this.props.applyDarkTheme(darkTheme)
    this.setState({ selected: theme })
  }

  onClick() {
    this.setState(state => {
      return { isActive: !state.isActive }
    })
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <BaseButton light handleClick={this.onClick}>
          {this.state.selected} theme
        </BaseButton>
        <Triangle />
        {this.state.isActive && (
          <DropDown
            ListItems={themes}
            show={this.state.isActive}
            onClickOutside={() =>
              this.setState({ isActive: false })
            }
            onHandleChange={this.handleChange}
            clickOutside={this.onClick}
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
