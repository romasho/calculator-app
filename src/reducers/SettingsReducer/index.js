import {
  APPLY_DARK_THEME,
  APPLY_LIGHT_THEME,
  TOGGLE_VISIBILITY,
  TOGGLE_HIDE,
} from './actions'

import theme from '@/theme'

export default function settingsReducer(
  state = {
    ...theme,
    themeName: 'Light',
    showHistory: true,
    showFullHistory: true,
  },
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
    case TOGGLE_VISIBILITY:
      return {
        ...state,
        showHistory: !state.showHistory,
      }
    case TOGGLE_HIDE:
      return {
        ...state,
        showFullHistory: !state.showFullHistory,
      }
    default:
      return state
  }
}
