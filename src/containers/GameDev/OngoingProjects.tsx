import React from 'react'
import Text from '@material-ui/core/Typography'
import { Card } from './Card'

export const OngoingProjects = () => (
  <React.Fragment>
    <Card
      title={
        <span>
          R<sup>3</sup>
        </span>
      }
      description="Personal project"
      details={
        <Text align="justify">
          R<sup>3</sup> is a physics-based game centered on designing and using
          vehicles constructed from blocks. Primary sources of inspiration are
          Robocraft and From The Depths.
        </Text>
      }
    />
  </React.Fragment>
)
