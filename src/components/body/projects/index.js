import React from 'react'
import { ProjectData } from '../../data/projects'
import Seperator from "../../common/social-contact/seperator/index"
import ProjectCard from './project-card'
import "./projects.css"
function Projects() {
  const data = ProjectData
  return (
    <div className='projects'>
      <Seperator/>
        <label className='section-title'>Projects</label>
        <div>
          {data.map((project)=>{
            return<ProjectCard project={project}/>
          })}
        </div>
    </div>
  )
}

export default Projects