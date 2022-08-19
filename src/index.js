import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Application from '@/App'
import GlobalStyles from '@/globalStyles'
import DarkThemeProvider from '@/components/DarkThemeProvider'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { store, persistor } from '@/store'

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DarkThemeProvider>
          <BrowserRouter>
            <Application />
            <GlobalStyles />
          </BrowserRouter>
        </DarkThemeProvider>
      </PersistGate>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root'),
)
