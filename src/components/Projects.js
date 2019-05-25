import React, { Component } from 'react';
export class Projects extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="projects">
        <h1 className="border_new"><i class="fa fa-adjust"></i> Projects</h1>
          <div className="container"> 
            <div id="portfolio" className="row">
            {
                data.projects && data.projects.map(item => {
                  return(
                    <div key={item.id} className="col-md-3">
                        <a target="_blank" href={item.url} rel="noopener noreferrer">  
                          <div class="portfolio-piece">
                             <h4 className="text-center">{item.projectName}</h4>
                            <h5 className="text-center"> {item.description}</h5>
                            <img src={item.imageUrl} alt="Placeholder"/>

                          </div>
                     </a>
                    </div>
                    )
                  }
                )
            }
            </div>
          </div>
      </section>  
    )
  }
}

export default Projects;
