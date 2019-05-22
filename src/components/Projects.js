import React, { Component } from 'react'

export class Projects extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="projects">
      <h1>Projects</h1>
      <div>
            <ul>
                {
                    data.projects && data.projects.map(item => {
                      return(
                              <li key={item.id}> 
                             <a href={item.url} target="_blank" rel="noopener noreferrer"><h6>{item.projectName}</h6></a>
        
                             <h6>{item.description}</h6>
                              </li>
                            )
                      }
                    )
                  }
            </ul>
       </div>
      </section>
    )
  }
}

export default Projects;
