import styled from 'styled-components'

export const Ul = styled.ul`
  list-style-type: none;
  position: absolute;
  border: 2px solid
    ${({ theme }) => theme.colors.secondaryText};
  background: ${({ theme }) => theme.colors.mainBg};
  width: 400px;
  top: 110px;
  left: 0;
`

export const Li = styled.li`
  width: 397px;
  height: 62px;
  border-bottom: 2px solid
    ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  padding: 15px 30px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`
