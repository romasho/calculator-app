import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.grey};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: ${({ theme }) => theme.fontSizes[1]}px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  letter-spacing: 0;
  font-weight: normal;
`

export const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  margin: ${({ theme }) => theme.fontSizes[1]}px;
  letter-spacing: 0;
  opacity: 0.7;
`
