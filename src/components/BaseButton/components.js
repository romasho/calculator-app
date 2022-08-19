import styled from 'styled-components'

export const Button = styled.button`
  width: 400px;
  height: 94px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  text-align: start;
  padding: 28px;
  margin-top: ${({ theme }) => theme.spaces[4]}px;
  background: ${props =>
    props.light
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.secondary};
  cursor: pointer;
`
