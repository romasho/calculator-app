import React from 'react'
import { Header, Title, CustomNavLink } from './components'
import {
  CALCULATOR_ROUTE,
  SETTING_PAGE_ROUTE,
  CALCULATOR_FUNC_ROUTE,
} from '@/constants'

const activeLink = {
  opacity: 1,
  paddingBottom: '8px',
  borderBottom: '1.2px solid #ffffff',
  textTransform: 'capitalize',
}

export default () => {
  return (
    <Header>
      <Title>Calculator App</Title>
      <nav>
        <CustomNavLink
          exact
          activeStyle={activeLink}
          to={CALCULATOR_ROUTE}>
          Home
        </CustomNavLink>
        <CustomNavLink
          activeStyle={activeLink}
          to={CALCULATOR_FUNC_ROUTE}>
          Home Functional
        </CustomNavLink>
        <CustomNavLink
          activeStyle={activeLink}
          to={SETTING_PAGE_ROUTE}>
          Setting
        </CustomNavLink>
      </nav>
    </Header>
  )
}
