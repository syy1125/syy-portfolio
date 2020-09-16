import React from 'react'
import Text from '@material-ui/core/Typography'

import { ProjectDisplay } from '../ProjectDisplay/ProjectDisplay'

export const LitestD = () => {
  return (
    <ProjectDisplay
      title="LitestD"
      detailsSubpath="litestd"
      imageUrl="https://img.itch.zone/aW1nLzE5NzE5MzAuanBn/315x250%23c/akOpR0.jpg"
      tagline="Resource management meets tower defense"
      links={[{ title: 'itch.io', href: 'https://syy1125.itch.io/litestd' }]}
      subtitle="VGDC Project, Winter 2019"
      inspirations={['Into The Breach (video game)']}
    >
      <Text variant="body2" align="justify">
        LitestD is a spin-off of the{' '}
        <a href="https://dsaname.itch.io/litd">Light in the Dark (LitD)</a>{' '}
        project proposal by another VGDC member, Riley. LitestD is developed in
        parallel with, but independent of, LitD.
        <br />
        This is the first time I used Unity's tilemap system. Ther were several
        gotchas about the tilemap system that we had learned the hard way. One
        of those was that it's hard to move entities on the tilemap. Unity's
        tilemap system was originally designed for static objects. This caused
        numerous problems and held back development quite a lot.
        <br />
        As this is a strategy game (which I am fond of doing), the UI work is
        quite heavy. Fortunately, I was able to employ some of the principles I
        learned from working with ReactJS in this project, ensuring UI
        consistency.
      </Text>
    </ProjectDisplay>
  )
}
