import React from 'react'

import { PageLayout } from '@/layouts'

import Loader from '@/components/Loader'
import Header from '@/components/Header'
import Calculator from '@/components/Calculator'

import { Card, Heading } from './components'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Calculator />
      </Card>
    </PageLayout>
  )
}
