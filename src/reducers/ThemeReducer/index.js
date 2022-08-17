import {
  APPLY_DARK_THEME,
  APPLY_LIGHT_THEME,
  TOGGLE_VISIBILITY,
} from './actions'

import theme from '@/theme'

export default function themeReducer(
  state = {
    ...theme,
    themeName: 'Light',
    isHistoryVisible: true,
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
        isHistoryVisible: !state.isHistoryVisible,
      }
    default:
      return state
  }
}
