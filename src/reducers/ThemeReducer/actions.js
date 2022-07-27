export const APPLY_DARK_THEME = 'APPLY_DARK_THEME'
export const APPLY_LIGHT_THEME = 'APPLY_LIGHT_THEME'

export const applyDarkTheme = theme => {
  return {
    type: APPLY_DARK_THEME,
    payload: theme,
  }
}

export const applyLightTheme = theme => {
  return {
    type: APPLY_LIGHT_THEME,
    payload: theme,
  }
}
