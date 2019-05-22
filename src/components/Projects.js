import React, { Component } from 'react';
export class Projects extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="projects">
      <h1 className="border_new"><i class="fa fa-adjust"></i> Projects</h1>
      <div className="row">
       {
          data.projects && data.projects.map(item => {
            return(
              <div key={item.id} className="col-md-4">
              <div className="services color-1">
              <span className="icon">
                  <i className="fa fa-github" />
              </span>
              <div>
              <a href={item.url} target="_blank" rel="noopener noreferrer"> <h3> {item.projectName} </h3></a>
                  <p>{item.description}</p>
              </div>
              </div>
          </div>
            )
          }
          )
       }
      </div>
      </section>

    )
  }
}

export default Projects;
