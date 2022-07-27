import React from 'react'

import { PageLayout } from '@/layouts'

import ThemeSelector from '@/components/ThemeSelector'
import ClearButton from '@/components/ClearButton'

import { Card, Heading } from './components'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Heading>Settings</Heading>
        <ThemeSelector />
        <ClearButton />
      </Card>
    </PageLayout>
  )
}
