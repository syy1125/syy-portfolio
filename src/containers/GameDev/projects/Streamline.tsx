import React from 'react'
import Text from '@mui/material/Typography'

import { ProjectDisplay } from '../ProjectDisplay/ProjectDisplay'

export const Streamline = () => {
  return (
    <ProjectDisplay
      title="Streamline"
      detailsSubpath="streamline"
      imageUrl="https://img.itch.zone/aW1nLzE4NDM3NTcucG5n/315x250%23c/gtGIK6.png"
      tagline="Circuit design puzzle"
      links={[{ title: 'itch.io', href: 'https://syy1125.itch.io/streamline' }]}
      subtitle="VGDC Project, Fall 2018, Unity"
      role="Team Lead, Designer, Programmer"
      inspirations={[
        'SpaceChem (video game)',
        'Psi (Minecraft mod)',
        'Factorio (video game)',
        'Shenzhen I/O (video game)',
      ]}
    >
      <Text variant="body2" align="justify">
        Streamline was my first project as team lead. It is a puzzle game.
        <br />
        My favourite part of the game was the data-oriented level loading system
        that I designed and implemented for the game. Each level is serialized
        as a JSON file, and using StreamingAssets system of Unity, the game
        dynamically loads levels at runtime.
        <br />
        The nature of this level loading system allows us to easily create or
        edit levels, even in a production build. This also enables community
        content, since anyone who understands the schema of a level JSON file
        can create new levels.
      </Text>
    </ProjectDisplay>
  )
}
