import React from 'react'

import { PageLayout, Card } from '@/layouts'

import Calculator from '@/components/Calculator/class'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Calculator />
      </Card>
    </PageLayout>
  )
}
