import React, { useState, useCallback } from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Details from '@material-ui/core/AccordionDetails'
import Paper from '@material-ui/core/Paper'
import Text from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ResponsiveCenter } from '../../components/ResponsiveCenter'
import { OngoingProjects } from './OngoingProjects'
import { FavouriteProjects } from './FavouriteProjects'
import { OtherProjects } from './OtherProjects'

type TabName = 'fav' | 'ongoing' | 'rest'

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}))

const Summary = withStyles(
  {
    root: {
      transition: 'margin 0.3s',
      '&$expanded': {
        minHeight: 48,
        marginTop: 16,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0px',
      },
    },
    expanded: {},
  },
  { name: 'Summary' }
)(AccordionSummary) as typeof AccordionSummary

export const GameDev = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState<TabName | null>(null)
  const handleChange = useCallback(
    (panel: TabName) => (_: unknown, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null)
    },
    [setExpanded]
  )

  return (
    <ResponsiveCenter>
      <Accordion
        elevation={0}
        expanded={expanded === 'ongoing'}
        onChange={handleChange('ongoing')}
      >
        <Summary
          component={Paper}
          expandIcon={<ExpandMoreIcon />}
          id="ongoing-header"
          aria-controls="ongoing-content"
        >
          Ongoing Projects
        </Summary>
        <Details className={classes.details}>
          <Text>
            These are the game project(s) I'm currently actively working on.
          </Text>
          <OngoingProjects />
        </Details>
      </Accordion>
      <Accordion
        elevation={0}
        expanded={expanded === 'fav'}
        onChange={handleChange('fav')}
      >
        <Summary
          component={Paper}
          expandIcon={<ExpandMoreIcon />}
          id="favourites-header"
          aria-controls="favourites-content"
        >
          Favourite Past Projects
        </Summary>
        <Details className={classes.details}>
          <Text>
            These are my favourite projects, both in terms of user experience
            and in terms of how much fun I had when working on them. I believe
            these represet the best of my work in games development.
          </Text>
          <FavouriteProjects />
        </Details>
      </Accordion>
      <Accordion
        elevation={0}
        expanded={expanded === 'rest'}
        onChange={handleChange('rest')}
      >
        <Summary
          component={Paper}
          expandIcon={<ExpandMoreIcon />}
          id="other-projects-header"
          aria-controls="other-projects-content"
        >
          Other Past Projects
        </Summary>
        <Details className={classes.details}>
          <Text>
            I enjoy experimenting in my game projects. While some of those are
            successful, many don't work out the way I want them to. Here are
            some other game development projects that I was involved in.
            Although I'm not very satisfied with the results, I have learned a
            great deal through working on these projects.
          </Text>
          <OtherProjects />
        </Details>
      </Accordion>
    </ResponsiveCenter>
  )
}
