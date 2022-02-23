import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { TitleBar } from './TitleBar'

export interface TabInfo {
  exact?: boolean
  path: string
  title: string
  icon: React.ReactNode
  Screen: React.ComponentType
}

interface Props {
  tabs: TabInfo[]
}

const Content = styled('div', { name: 'Content' })(({ theme }) => ({
  flexGrow: 1,
  margin: theme.spacing(1),
  overflow: 'auto',
}))

export const Tabs = ({ tabs }: Props) => {
  return (
    <React.Fragment>
      <TitleBar tabs={tabs} />
      <Content>
        <Switch>
          {tabs.map(({ title, icon, Screen, ...props }) => (
            <Route key={props.path} {...props}>
              <Screen />
            </Route>
          ))}
        </Switch>
      </Content>
    </React.Fragment>
  )
}
