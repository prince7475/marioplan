import ProjectSummary from './ProjectSummary';
import React from 'react'

 const  ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {projects &&  projects.map((project,idx) => {
         
          return (
              <ProjectSummary project={project} key={idx}/>
          )
      })}
    </div>
  )
}

export default ProjectList