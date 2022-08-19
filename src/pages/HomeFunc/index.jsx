import React from 'react'

import { PageLayout, Card } from '@/layouts'

import Calculator from '@/components/Calculator/func'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Calculator />
      </Card>
    </PageLayout>
  )
}
