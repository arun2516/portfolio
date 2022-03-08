import React from 'react';
import "./project-card.css";
import { BsGlobe2 } from "react-icons/bs";
function ProjectCard({project}) {
  return (
    <div className='project-card'>
        <div className='project-info'>
            <label className='project-title'>{project.title}</label>
            <div className='project-links'>
                {project.demo && <a className='project-link' href=
                {project.demo} target="_blank" rel="noreferrer">
                    <div className='link-button'>
                    <BsGlobe2/>Demo
                    </div>
                    </a>}
                {project.githubf && <a className='project-link' href=
                {project.githubf} target="_blank" rel="noreferrer">
                    <div className='link-button'>
                    <i class="devicon-github-original colored"></i>Frontend
                    </div>
                    </a>}
                    {project.githubb && <a className='project-link' href=
                {project.githubb} target="_blank" rel="noreferrer">
                    <div className='link-button'>
                    <i class="devicon-github-original colored"></i>Backend
                    </div>
                    </a>}
            </div>
            <p>{project.about}</p>
            <div className='project-tags'>
                {project.tags.map((tag)=>{
                    return(
                        <label className='tag'>{tag}</label>
                    )
                })}
            </div>

        </div>
        <img src={project.image} className="project-photo" alt="project_images"/>
    </div>
  )
}

export default ProjectCard;