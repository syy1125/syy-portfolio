import React, { useMemo } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset'
import InfoIcon from '@mui/icons-material/Info'

import { TabInfo, Tabs } from './components/Tabs'
import { Home } from './containers/Home'
import { About } from './containers/About'
import { GameDev } from './containers/GameDev'
import { SmallAlert } from './containers/SmallAlert'

export const Main = () => {
  const tabs = useMemo<TabInfo[]>(
    () => [
      {
        exact: true,
        path: '/',
        title: 'Home',
        icon: <HomeIcon />,
        Screen: Home,
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
    ],
    []
  )

  return (
    <React.Fragment>
      <Tabs tabs={tabs} />
      <SmallAlert />
    </React.Fragment>
  )
}
