import React from 'react'

import { PageLayout, Card } from '@/layouts'

import Calculator from '@/components/Calculator/class'

export default class Home extends React.Component {
  render() {
    return (
      <PageLayout>
        <Card>
          <Calculator />
        </Card>
      </PageLayout>
    )
  }
}
