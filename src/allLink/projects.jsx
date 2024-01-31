import React from "react";
import projectsList from "../component/projectsList";


export default function Project()
{
    return(
        <div>
      <h2>Projects</h2>
      <ul>
        {projectsList.map(project => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Technologies Used: {project.technologies.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
    );
}