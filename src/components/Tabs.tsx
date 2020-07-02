import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { TitleBar } from './TitleBar'

export interface TabInfo {
  exact?: boolean
  path: string
  title: string
  Screen: React.ComponentType
}

interface Props {
  tabs: TabInfo[]
}

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
}))

export const Tabs = ({ tabs }: Props) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <TitleBar tabs={tabs} />
      <div className={classes.content}>
        <Switch>
          {tabs.map(({ title, Screen, ...props }) => (
            <Route {...props}>
              <Screen />
            </Route>
          ))}
        </Switch>
      </div>
    </React.Fragment>
  )
}
