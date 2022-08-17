import styled from 'styled-components'

export const Button = styled.button`
  width: 401px;
  height: 93px;
  border: 2px solid #434343;
  border-radius: 8px;
  font-size: 32px;
  text-align: start;
  padding: 28px;
  margin-top: 32px;
  background: ${props =>
    props.light
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.secondary};
  cursor: pointer;
`
