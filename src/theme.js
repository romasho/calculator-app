import { css } from 'styled-components'

const font = 'Helvetica Neue, sans-serif'

// Color palette
const white = '#ffffff'
const grey = '#434343'
const secondaryLight = '#6a6b7b'

export const lightTheme = {
  mainBg: '#ffffff',
  mainText: '#000000',
  secondary: '#F2F2F2',
  secondaryText: '#707070',
}

export const darkTheme = {
  mainBg: '#434343',
  mainText: '#ffffff',
  secondary: '#6a6b7b',
  secondaryText: '#707070',
}

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [64, 32, 30],
  colors: {
    ...lightTheme,
    white,
    grey,
    secondaryLight,
  },
}
