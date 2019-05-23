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
                    <div key={item.id} className="col-md-4">
                        <a target="_blank" href={item.url} rel="noopener noreferrer"> 
                           <img className="img-responsive" src={item.imageUrl} alt="Poject Name"/>
                           <figcaption className="caption">{item.projectName}</figcaption>
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
