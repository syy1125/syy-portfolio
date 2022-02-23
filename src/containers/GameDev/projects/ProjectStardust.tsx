import React from 'react'
import Text from '@mui/material/Typography'
import { ProjectDisplay } from '../ProjectDisplay/ProjectDisplay'

export const ProjectStardust = () => {
  return (
    <ProjectDisplay
      title="Project Stardust"
      detailsSubpath="project-stardust"
      tagline="Incorporating orbital mechanics in grand strategy"
      links={[
        {
          title: 'itch.io',
          href: 'https://syy1125.itch.io/project-stardust',
        },
      ]}
      subtitle="VGDC Project, Winter 2020"
      inspirations={[
        'Kerbal Space Program (video game)',
        'Stellaris (video game)',
        'The Expanse (book series)',
      ]}
    >
      <Text variant="body2" align="justify">
        Project Stardust was my attempt at creating a semi-realistic space
        strategy game.
        <br />
        Since I am a double major in Computer Game Science and Astrophysics,
        this is sort of an attempt to combine my two areas of interest. The
        orbits demonstrate all six Keplerian elements, and transit time and cost
        calculations are based on realistic results provided by a Lambert
        solver. In addition, the orbits of planets in the solar system match
        their orbital parameters in real life.
        <br />
        The game is unfinished. I was too ambitious in the design, and it turned
        out that the game mechanics don't interact to create sufficiently
        interesting dynamics and aesthetics. This flaw, combined with the COVID
        outbreak, made me discontinue Project Stardust.
      </Text>
    </ProjectDisplay>
  )
}
