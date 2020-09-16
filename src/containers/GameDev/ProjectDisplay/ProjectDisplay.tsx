import React from 'react'
import { Route, useRouteMatch, useHistory } from 'react-router-dom'
import { ProjectCard } from './ProjectCard'
import { ProjectDialog } from './ProjectDialog'

interface Props {
  title: React.ReactNode
  detailsSubpath: string
  // Card data
  imageUrl?: string
  tagline: string
  links?: Array<{ title: string; href: string }>
  // Dialog data
  subtitle: string
  inspirations?: string[]
  children: React.ReactNode | React.ReactNode[]
}

export const ProjectDisplay = ({
  title,
  detailsSubpath,
  imageUrl,
  tagline,
  links,
  subtitle,
  inspirations,
  children,
}: Props) => {
  const match = useRouteMatch()
  const history = useHistory()

  return (
    <React.Fragment>
      <ProjectCard
        title={title}
        detailsPath={`${match.url}/${detailsSubpath}`}
        imageUrl={imageUrl}
        tagline={tagline}
        links={links}
      />
      <Route path={`${match.url}/${detailsSubpath}`}>
        {({ match }) => (
          <ProjectDialog
            open={match != null}
            onClose={() => history.goBack()}
            title={title}
            subtitle={subtitle}
            inspirations={inspirations}
          >
            {children}
          </ProjectDialog>
        )}
      </Route>
    </React.Fragment>
  )
}
