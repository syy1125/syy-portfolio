import React, { useMemo } from 'react'
import { TabInfo, Tabs } from './components/Tabs'
import { About } from './screens/about'

export const Main = () => {
  const tabs = useMemo<TabInfo[]>(
    () => [
      {
        exact: true,
        path: '/',
        title: 'Home',
        Screen: () => null,
      },
      {
        path: '/game-dev',
        title: 'Game Dev',
        Screen: () => null,
      },
      {
        path: '/about',
        title: 'About This Site',
        Screen: About,
      },
      {
        path: '/contact',
        title: 'Contact / Resume',
        Screen: () => null,
      },
    ],
    []
  )

  return <Tabs tabs={tabs} />
}
