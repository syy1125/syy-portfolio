import React from 'react'
import Text from '@material-ui/core/Typography'
import { Card } from './Card'

export const FavouriteProjects = () => (
  <React.Fragment>
    <Card
      imageUrl="https://img.itch.zone/aW1nLzE1Nzg1MDMucG5n/315x250%23c/nEVHCM.png"
      link="https://epkitch.itch.io/spinball"
      title="Spinball"
      description="Game jam project, Fall 2018"
      details={
        <Text align="justify">
          Spinball is one of my earliest game projects. It is a physics-based
          fighting game, somewhat like a digital version of beyblade.
          <br />
          At the time, I was relatively new to Unity. I primarily worked on the
          UI for spinball selection screen. Later on, as an experiment with
          data-oriented design, I refactored the spinball loading system to load
          from a JSON file, instead of being written in the editor.
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
          Streamline was my first game project as the team lead. It is a puzzle
          game, inspired by SpaceChen and the Minecraft mod Psi.
          <br />I designed a data-oriented level loading system for the game.
          Each level is represented by a JSON file stored in the StreamingAssets
          folder. The schema that the JSON file follows is fairly simple. This
          enabled us to easily create or edit levels even when using a
          production build. This also enables community content, since anyone
          who understands the schema of the level file will be able to create
          new levels.
        </Text>
      }
    />
    <Card
      imageUrl="https://img.itch.zone/aW1nLzE5NzE5MzAuanBn/315x250%23c/akOpR0.jpg"
      link="https://syy1125.itch.io/litestd"
      title="LitestD"
      description="Quater-long VGDC project, Winter 2019"
      details={
        <Text align="justify" variant="body2">
          LitestD is a spin-off for the{' '}
          <a href="https://dsaname.itch.io/litd">Light in the Dark</a> project
          by another VGDC member, Riley, developed in parallel to LitD. I ended
          up being the team lead for the project. The game is a mix of resource
          management and tower defense, inspired by Into The Breach.
          <br />
          This game is my first time using Unity's Tilemap system. We were
          forced to learn some surprising technical details about Unity Tilemap
          the hard way. For example, it's hard to move entites on the tilemap,
          since it was designed for static entities. This caused us numerous
          problems as we tried to mvoe the enemies around on the tilemap.
          <br />
          The UI work is heavy. I have applied many principles I learned from
          working with ReactJS to ensure the consistency of the user interface.
        </Text>
      }
    />
  </React.Fragment>
)
