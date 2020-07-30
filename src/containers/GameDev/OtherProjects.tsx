import React from 'react'
import Text from '@material-ui/core/Typography'
import { Card } from './Card'

export const OtherProjects = () => (
  <React.Fragment>
    <Card
      imageUrl="https://img.itch.zone/aW1nLzI3NDM3MTYucG5n/315x250%23c/QKM4m8.png"
      link="https://syy1125.itch.io/artificial-gravity"
      title="Artificial Gravity"
      description="Quarter-long VGDC project, Fall 2019"
      details={
        <Text align="justify">
          Artificial Gravity was my first venture into 3D games. It revolves
          around the concept of having the player be in total control of the
          direction of gravity. The game is partially inspired by the book
          series Stormlight Archive by Brandon Sanderson.
          <br />
          In creating this game, I have learned much about working with 3D art
          assets, and also experimented with asynchronous level loading.
          <br />
          Ultimately, I believe having an arbitrary direction of gravity, in
          addition to the game being three-dimensional, increased the level
          design complexity too much, and thus the game content was very
          limited.
        </Text>
      }
    />
    <Card
      link="https://syy1125.itch.io/project-stardust"
      title="Project Stardust"
      description="Quarter-long VGDC project, Winter 2020"
      details={
        <Text>
          Project Stardust was my attempt at creating a semi-realistic space
          strategy game. It is inspired by Kerbal Space Program, Stellaris, and
          The Expanse book series.
          <br />
          As I double major in Computer Game Science and Astrophysics, this
          could count as an attempt by me to combine my two areas of study. The
          planets in the game use realistic orbits that demonstrate all six
          keplerian elements, and I have set up transit calculations that are
          based on realistic results provided by a Lambert solver.
          <br />
          The game is very much unfinished. I was too ambitious in the design,
          and it turned out the game mechanics, while reasonable, don't interact
          to create dynamics that were interesting enough. This, combined with
          the COVID outbreak, made me discontinue this project.
        </Text>
      }
    />
  </React.Fragment>
)
