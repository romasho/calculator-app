import {
  APPLY_DARK_THEME,
  APPLY_LIGHT_THEME,
} from './actions'

import theme from '@/theme'

export default function themeReducer(
  state = { ...theme, themeName: 'Light' },
  action,
) {
  switch (action.type) {
    case APPLY_DARK_THEME:
      return {
        ...state,
        themeName: 'Dark',
        colors: {
          ...state.colors,
          ...action.payload,
        },
      }
    case APPLY_LIGHT_THEME:
      return {
        ...state,
        themeName: 'Light',
        colors: {
          ...state.colors,
          ...action.payload,
        },
      }
    default:
      return state
  }
}
