import React, { useMemo } from 'react'
import HomeIcon from '@material-ui/icons/Home'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import InfoIcon from '@material-ui/icons/Info'

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
