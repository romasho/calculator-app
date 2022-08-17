import React from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

class DarkThemeProvider extends React.Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    theme: state.settingsReducer,
  }
}

export default connect(
  mapStateToProps,
  null,
)(DarkThemeProvider)
