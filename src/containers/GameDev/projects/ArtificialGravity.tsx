import React from 'react'
import Text from '@material-ui/core/Typography'

import { ProjectDisplay } from '../ProjectDisplay/ProjectDisplay'

export const ArtificialGravity = () => {
  return (
    <ProjectDisplay
      title="Artificial Gravity"
      detailsSubpath="artificial-gravity"
      imageUrl="https://img.itch.zone/aW1nLzI3NDM3MTYucG5n/315x250%23c/QKM4m8.png"
      tagline="What happens if you can control gravity?"
      links={[
        {
          title: 'itch.io',
          href: 'https://syy1125.itch.io/artificial-gravity',
        },
      ]}
      subtitle="VGDC Project, Fall 2019"
      inspirations={[
        'Stormlight Archive (book series)',
        'Terraria (video game)',
      ]}
    >
      <Text variant="body2" align="justify">
        I began venturing into the third dimension with Artificial Gravity. The
        whole game revolves around having the player be in complete control over
        the direction of gravity.
        <br />
        Working with 3D assets turned out to be quite different from 2D assets.
        For example, Unity tries to preserve the structure of the 3D model when
        importing it, and so it is difficult to attach behaviour to individual
        components of a model. They would frequently get reset as we change the
        3D model.
        <br />
        As most artists in VGDC primarily work in 2-dimensional space, there was
        little experience for us to draw on when we run into issues. We learned
        much over the course of working on Artificial Gravity, and the 3D artist
        working on our team eventually gathered enough experience to properly
        kick off 3D art in VGDC.
        <br />
        I also experimented with asynchronous level loading in Unity. With that
        technology, I was able to make transition from level 1 to level 2
        seamless.
        <br />
        Ultimately, I believe having an arbitrary direction of gravity, in
        addition to having the game be 3D, increased the design complexity too
        much. The game content was very limited and remains largely as a proof
        of concept.
      </Text>
    </ProjectDisplay>
  )
}
