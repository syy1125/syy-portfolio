import React, { useState, useCallback } from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Details from '@material-ui/core/AccordionDetails'
import Paper from '@material-ui/core/Paper'
import Text from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Card } from './Card'

type TabName = 'fav' | 'ongoing' | 'rest'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '60%',
    left: '20%',
    right: '20%',
  },
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
    <div className={classes.root}>
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
          <Card
            title={
              <span>
                R<sup>3</sup>
              </span>
            }
            description="Personal project"
            details={
              <Text align="justify">
                R<sup>3</sup> is a block-based vehicle design and combat game.
                Primary sources of inspiration are Robocraft and From The
                Depths.
              </Text>
            }
          />
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
          <Card
            imageUrl="https://img.itch.zone/aW1nLzE1Nzg1MDMucG5n/315x250%23c/nEVHCM.png"
            link="https://epkitch.itch.io/spinball"
            title="Spinball"
            description="Game jam project, Fall 2018"
            details={
              <Text align="justify">
                Spinball is one of my earliest game projects. It is a
                physics-based fighting game, somewhat like a digital version of
                beyblade.
                <br />
                At the time, I was relatively new to Unity. I primarily worked
                on the UI for spinball selection screen. Later on, as an
                experiment with data-oriented design, I refactored the spinball
                loading system to load from a JSON file, instead of being
                written in the editor.
              </Text>
            }
          />
          <Card
            reverse
            imageUrl="https://img.itch.zone/aW1nLzE4NDM3NTcucG5n/315x250%23c/gtGIK6.png"
            link="https://syy1125.itch.io/streamline"
            title="Streamline"
            description="Quarter-long VGDC project, Fall 2018"
            details={
              <Text align="justify">
                Streamline was my first game project as the team lead. It is a
                puzzle game, inspired by SpaceChen and the Minecraft mod Psi.
                <br />I designed a data-oriented level loading system for the
                game. Each level is represented by a JSON file stored in the
                StreamingAssets folder. The schema that the JSON file follows is
                fairly simple. This enabled us to easily create or edit levels
                even when using a production build. This also enables community
                content, since anyone who understands the schema of the level
                file will be able to create new levels.
              </Text>
            }
          />
          <Card
            imageUrl="https://img.itch.zone/aW1nLzE5NzE5MzAuanBn/315x250%23c/akOpR0.jpg"
            link="https://syy1125.itch.io/litestd"
            title="LitestD"
            description="Quater-long VGDC project, Winter 2019"
            details={
              <Text align="justify">
                LitestD is a spin-off for the{' '}
                <a href="https://dsaname.itch.io/litd">Light in the Dark</a>{' '}
                project by another VGDC member, Riley, developed in parallel to
                LitD. I ended up being the team lead for the project. The game
                is a mix of resource management and tower defense, inspired by
                Into The Breach.
                <br />
                This game is my first time using Unity's Tilemap system. We were
                forced to learn some surprising technical details about Unity
                Tilemap the hard way. For example, it's actually pretty hard to
                move entites on the tilemap - the tilemap seem to be intended
                for static objects. This caused us numerous problems as we tried
                to mvoe the enemies around on the tilemap.
                <br />
                As this is a strategy game, the UI work is heavy. I have applied
                many principles I learned from working with ReactJS to ensure
                the consistency of the user interface, and in the process
                refined my UI workflow.
              </Text>
            }
          />
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
          <Card
            imageUrl="https://img.itch.zone/aW1nLzI3NDM3MTYucG5n/315x250%23c/QKM4m8.png"
            link="https://syy1125.itch.io/artificial-gravity"
            title="Artificial Gravity"
            description="Quarter-long VGDC project, Fall 2019"
            details={
              <Text align="justify">
                Artificial Gravity was my first venture into 3D games. It
                revolves around the concept of having the player be in total
                control of the direction of gravity. The game is partially
                inspired by the book series Stormlight Archive by Brandon
                Sanderson.
                <br />
                In creating this game, I have learned much about working with 3D
                art assets, and also experimented with asynchronous level
                loading.
                <br />
                Ultimately, I believe having an arbitrary direction of gravity,
                in addition to the game being three-dimensional, increased the
                level design complexity too much, and thus the game content was
                very limited.
              </Text>
            }
          />
          <Card
            link="https://syy1125.itch.io/project-stardust"
            title="Project Stardust"
            description="Quarter-long VGDC project, Winter 2020"
            details={
              <Text>
                Project Stardust was my attempt at creating a semi-realistic
                space strategy game. It is inspired by Kerbal Space Program,
                Stellaris, and The Expanse book series.
                <br />
                As I double major in Computer Game Science and Astrophysics,
                this could count as an attempt by me to combine my two areas of
                study. The planets in the game use realistic orbits that
                demonstrate all six keplerian elements, and I have set up
                transit calculations that are based on realistic results
                provided by a Lambert solver.
                <br />
                The game is very much unfinished. I was too ambitious in the
                design, and it turned out the game mechanics, while reasonable,
                don't interact to create dynamics that were interesting enough.
                This, combined with the COVID outbreak, made me discontinue this
                project.
              </Text>
            }
          />
        </Details>
      </Accordion>
    </div>
  )
}
