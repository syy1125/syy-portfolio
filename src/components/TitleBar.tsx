import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
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
    whiteSpace: 'nowrap',
    '&::after': {
      content: "''",
      position: 'absolute',
      left: '50%',
      right: '50%',
      height: 1,
      bottom: 0,
      background: 'white',
      transition: 'left 0.3s, right 0.3s, height 0s 0.3s',
    },
    '&:hover': {
      '&::after': {
        left: 0,
        right: 0,
        height: 3,
        transition: 'left 0.3s, right 0.3s',
      },
    },
  },
  selectedTab: {
    '&::after': {
      left: 0,
      right: 0,
      transition: 'left 0.3s, right 0.3s',
    },
  },
  text: {
    marginLeft: theme.spacing(1),
  },
}))

export const TitleBar = ({ tabs }: Props) => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Text variant="h6" noWrap>
          Jack (Yunyang) Sun Portfolio v{version}
        </Text>
        <div className={classes.filler} />
        {tabs.map(({ title, icon, Screen: _, ...props }) => (
          <Route key={props.path} {...props}>
            {({ match }) => (
              <div
                className={classnames(classes.tab, {
                  [classes.selectedTab]: match != null,
                })}
                onClick={() => history.push(props.path)}
              >
                <Hidden only="md">{icon}</Hidden>
                <Hidden smDown>
                  <Text className={classes.text}>{title}</Text>
                </Hidden>
              </div>
            )}
          </Route>
        ))}
      </Toolbar>
    </AppBar>
  )
}
