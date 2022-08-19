import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  CALCULATOR_ROUTE,
  SETTING_PAGE_ROUTE,
  CALCULATOR_FUNC_ROUTE,
} from '@/constants'

import Loader from '@/components/Loader'
import Header from '@/components/Header'

const HomePage = lazy(() => import('@/pages/Home'))
const HomePageFunc = lazy(() => import('@/pages/HomeFunc'))
const SettingPage = lazy(() =>
  import('@/pages/SettingsPage'),
)

export default () => (
  <Suspense fallback={<Loader />}>
    <Header />
    <Switch>
      <Route
        exact
        path={CALCULATOR_ROUTE}
        component={HomePage}
      />
      <Route
        exact
        path={CALCULATOR_FUNC_ROUTE}
        component={HomePageFunc}
      />
      <Route
        exact
        path={SETTING_PAGE_ROUTE}
        component={SettingPage}
      />
    </Switch>
  </Suspense>
)
