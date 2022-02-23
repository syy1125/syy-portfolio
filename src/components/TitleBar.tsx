import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Hidden from '@mui/material/Hidden'
import Toolbar from '@mui/material/Toolbar'
import Text from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { TabInfo } from './Tabs'
import pkg from '../../package.json'

interface Props {
  tabs: TabInfo[]
}

const Filler = styled('div', { name: 'Filler' })({
  flexGrow: 1,
})

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  selected: boolean
}

const Tab = styled('div', {
  name: 'Tab',
  shouldForwardProp: (prop) => prop !== 'selected',
})<TabProps>(({ selected, theme }) => ({
  position: 'relative',
  alignSelf: 'stretch',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: selected ? '0px' : '50%',
    right: selected ? '0px' : '50%',
    height: '1px',
    bottom: '0px',
    background: 'white',
    transition: selected
      ? 'left 0.2s, right 0.2s, height 0.2s'
      : 'left 0.2s, right 0.2s, height 0s 0.2s',
  },
  '&:hover': {
    '&::after': {
      left: '0px',
      right: '0px',
      height: '3px',
      transition: selected
        ? 'left 0.2s, right 0.2s, height 0.2s'
        : 'left 0.2s, right 0.2s',
    },
  },
}))

const TabText = styled(Text, { name: 'TitleText' })(({ theme }) => ({
  marginLeft: theme.spacing(1),
}))

export const TitleBar = ({ tabs }: Props) => {
  const history = useHistory()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Text variant="h6" noWrap>
          Jack (Yunyang) Sun Portfolio v{pkg.version}
        </Text>
        <Filler />
        {tabs.map(({ title, icon, Screen: _, ...props }) => (
          <Route key={props.path} {...props}>
            {({ match }) => (
              <Tab
                selected={match != null}
                onClick={() => history.push(props.path)}
              >
                <Hidden only="md">{icon}</Hidden>
                <Hidden mdDown>
                  <TabText>{title}</TabText>
                </Hidden>
              </Tab>
            )}
          </Route>
        ))}
      </Toolbar>
    </AppBar>
  )
}
