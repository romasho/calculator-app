import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTING_PAGE_ROUTE,
} from '@/constants'

import Loader from '@/components/Loader'
import Header from '@/components/Header'

const HomePage = lazy(() => import('@/pages/Home'))
const SettingPage = lazy(() =>
  import('@/pages/SettingsPage'),
)

export default () => (
  <Suspense fallback={<Loader />}>
    <Header />
    <Switch>
      <Route
        exact
        path={HOME_PAGE_ROUTE}
        component={HomePage}
      />
      <Route
        exact
        path={SETTING_PAGE_ROUTE}
        component={SettingPage}
      />
    </Switch>
  </Suspense>
)
