import React from 'react'
import Text from '@mui/material/Typography'

import { ProjectDisplay } from '../ProjectDisplay/ProjectDisplay'

export const OberthEffect = () => {
  return (
    <ProjectDisplay
      title="Oberth Effect"
      detailsSubpath="oberthEffect"
      tagline="Moddable vehicle builder and combat"
      subtitle="Personal project"
      inspirations={[
        'Reassembly (video game)',
        'From The Depths (video game)',
        'Robocraft (video game)',
      ]}
    >
      <Text variant="body2" align="justify">
        Oberth Effect is one of my most ambitious projects so far. It is
        designed to be a vehicle design and combat game, with some built-in
        modding support.
      </Text>
      <br />
      <Text>Concept and Design</Text>
      <Text variant="body2" align="justify">
        The idea originally came when I was playing Reassembly. Reassembly was
        one of my favourite games, but it lacked support for real-time
        multiplayer.
        <br />
        As such, when I took course ICS 168 (Multiplayer Game Design) at UCI, I
        came up with Oberth Effect as my project for that course. The idea was
        to take a simplfied version of Reassembly's vehicle building system, and
        create a multiplayer-compatible game arount it. At the end of the
        course, I was very satisfied with the progress I made on the game and
        decided to continue development over summer break. Most likely I will
        continue working on it in ICS 169A/B (Capstone Game Project).
      </Text>
      <br />
      <Text>Content and Modding</Text>
      <Text variant="body2" align="justify">
        I've always been a fan of modding. I believe that community-made content
        can add a lot of value to a game, and I've seen modding extend the
        experience of many games - games like Minecraft, KSP, and Stellaris, to
        list a few. So when I was developing the game, I made sure that modding
        has a place in Oberth Effect.
        <br />
        The game content is centered around using YAML documents to define and
        describe blocks. The fields that make up a block definition roughly
        correspond to the components of a block. The mod loader system allows
        adding additional content, or changing existing ones, to add or modify
        blocks in the game. This allows whant I call data modding, where content
        creators can use the existing components in the game to make their own
        unique dynamics.
        <br />
        There are plans to also allow what I call code modding, where modders
        can write their own code, define their own components, so that they have
        deeper access to augment or modify the game code, instead of having to
        rely on existing code architecture. This would let mods change the game
        on the mechanics level. However, code modding would require a major
        refactor of the existing game code, and it is rather ambitious. To avoid
        scope creep, code modding is currently listed as a low-priority feature.
      </Text>
    </ProjectDisplay>
  )
}
