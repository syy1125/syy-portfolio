import React, { useMemo } from 'react'
import HomeIcon from '@material-ui/icons/Home'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import InfoIcon from '@material-ui/icons/Info'
import ChatIcon from '@material-ui/icons/Chat'

import { TabInfo, Tabs } from './components/Tabs'
import { GameDev } from './containers/GameDev'
import { About } from './containers/About'

export const Main = () => {
  const tabs = useMemo<TabInfo[]>(
    () => [
      {
        exact: true,
        path: '/',
        title: 'Home',
        icon: <HomeIcon />,
        Screen: () => null,
      },
      {
        path: '/game-dev',
        title: 'Game Dev',
        icon: <VideogameAssetIcon />,
        Screen: GameDev,
      },
      {
        path: '/about',
        title: 'About This Site',
        icon: <InfoIcon />,
        Screen: About,
      },
      {
        path: '/contact',
        title: 'Contact / Resume',
        icon: <ChatIcon />,
        Screen: () => null,
      },
    ],
    []
  )

  return <Tabs tabs={tabs} />
}
