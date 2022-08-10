import React from 'react'

import { PageLayout } from '@/layouts'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: '' }
  }

  static getDerivedStateFromError(error) {
    return { hasError: error.message }
  }

  render() {
    if (this.state.hasError) {
      return (
        <PageLayout>
          <h2>Sorry Calculator is crashed!</h2>
          <p>{this.state.hasError}</p>
        </PageLayout>
      )
    }
    return this.props.children
  }
}
