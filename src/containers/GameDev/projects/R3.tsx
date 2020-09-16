import React from 'react'
import Text from '@material-ui/core/Typography'

import { ProjectDisplay } from '../ProjectDisplay/ProjectDisplay'

export const R3 = () => {
  return (
    <ProjectDisplay
      title={
        <>
          R<sup>3</sup>
        </>
      }
      detailsSubpath="r3"
      tagline="Build your own combat vehicle"
      subtitle="Personal project"
      inspirations={[
        'From The Depths (video game)',
        'Robocraft (video game)',
        'Space Engineers (video game)',
      ]}
    >
      <Text variant="body2" align="justify">
        R<sup>3</sup> is designed to be a physics-based game centered on
        designing and using vehicles constructed from blocks. The vehicle's
        physical characteristics and behaviour are all determined by its blocks,
        making it crucial to have a good design in order to create a
        well-behaving vehicle.
      </Text>
      <Text variant="body2">Currently this is barely a prototype.</Text>
      <br />
      <Text>Concept and Design</Text>
      <Text variant="body2" align="justify">
        When coming up with the initial concept, I was particularly inspired by
        the degree of customization possible in FTD. However, I believe that
        while the complex mechanics present in FTD makes the game enjoyable to
        players like me, it tends to overwhelm new players, introducing a
        barrier to entry.
        <br />
        As such, I wanted to see if I can simplify the initial information load
        that a player needs to handle, while still retaining as much
        customization capabilities as possible.
      </Text>
      <br />
      <Text>Architecture</Text>
      <Text variant="body2" align="justify">
        The game contains two main modules, blocks and vehicle, along with
        various supporting modules.
        <br />
        The blocks module is responsible for describing the characteristics of a
        block. Some information that it contains are: display name, block
        material (a custom construct), volume, moment of inertial per unit
        volume.
        <br />
        The block material contains information such as the block density and
        rendering material. Using density and volume, the game system can then
        compute the block mass, which, in turn, can be used to compute the
        moment of inertial tensor.
        <br />
        Each vehicle is, effectively, a collection of blocks. Continuing the
        example of moment of inertia, the vehicle physics controller would
        aggregate the moments of inertia from all blocks, and then pass the
        final value to Unity's physics engine.
        <br />
        The blocks are stored and loaded using Unity's Addressable system. This
        is my first time working with such a system, and I'm learning much, both
        in knowledge of the Addressable system, and in insights about the
        demands of dynamic asset loading in games programming in general that
        inspired such a system.
      </Text>
    </ProjectDisplay>
  )
}
