import React from 'react'
import Text from '@material-ui/core/Typography'

import { ProjectDisplay } from '../ProjectDisplay/ProjectDisplay'

export const Spinball = () => {
  return (
    <ProjectDisplay
      title="Spinball"
      detailsSubpath="spinball"
      imageUrl="https://img.itch.zone/aW1nLzE1Nzg1MDMucG5n/315x250%23c/nEVHCM.png"
      tagline="Basically virtual beyblade"
      links={[{ title: 'itch.io', href: 'https://epkitch.itch.io/spinball' }]}
      subtitle="Game Jam project, Fall 2018"
    >
      <Text variant="body2" align="justify">
        Spinball: Spiral Out Of Control (SPOOC, or Spinball) was my first game
        jam project, and my best one to date.
        <br />
        Spinball is a physics-based fighting game, somewhat like a digital
        version of beyblade.
        <br />
        At the time, I was new to Unity. I primarily worked on the UI for
        spinball selection screen.
        <br />
        Later on, as an experiment with data-driven design, I refactored the
        spinball loading system to load from a JSON file instead of being
        written in the editor. This makes fine-tuning of various attributes of
        spinballs much easier, since editing those attributes no longer require
        the Unity editor - anyone with a text editor can do it.
      </Text>
    </ProjectDisplay>
  )
}
