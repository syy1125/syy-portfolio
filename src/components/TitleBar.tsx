import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Text from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import classnames from 'classnames'

import { TabInfo } from './Tabs'
import { version } from '../../package.json'

interface Props {
  tabs: TabInfo[]
}

const useStyles = makeStyles((theme) => ({
  toolBar: {
    flexDirection: 'row',
  },
  filler: {
    flexGrow: 1,
  },
  tab: {
    position: 'relative',
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    cursor: 'pointer',
    '&::after': {
      content: "''",
      position: 'absolute',
      left: '50%',
      right: '50%',
      bottom: 0,
      height: 3,
      background: 'white',
      transition: 'left 0.3s, right 0.3s',
    },
  },
  selectedTab: {
    '&::after': {
      left: 0,
      right: 0,
      height: 1,
    },
  },
  hoverTab: {
    '&:hover': {
      '&::after': {
        left: 0,
        right: 0,
        height: 3,
      },
    },
  },
}))

export const TitleBar = ({ tabs }: Props) => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Text variant="h6">Jack (Yunyang) Sun Portfolio v{version}</Text>
        <div className={classes.filler} />
        {tabs.map(({ title, Screen: _, ...props }) => (
          <Route key={props.path} {...props}>
            {({ match }) => (
              <div
                className={classnames(
                  classes.tab,
                  { [classes.selectedTab]: match != null },
                  classes.hoverTab
                )}
                onClick={() => history.push(props.path)}
              >
                <Text>{title}</Text>
              </div>
            )}
          </Route>
        ))}
      </Toolbar>
    </AppBar>
  )
}
