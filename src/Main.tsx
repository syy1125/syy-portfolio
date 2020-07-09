import React, { useMemo } from 'react'
import { TabInfo, Tabs } from './components/Tabs'
import { GameDev } from './screens/gamedev'
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
        Screen: GameDev,
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
