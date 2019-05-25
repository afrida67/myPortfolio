import React, { Component } from 'react';

const aStyle = {
  textDecoration: 'none',
  color: '#000000'
};
export class Projects extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="projects">
        <h1 className="border_new"><i className="fa fa-adjust"></i> Projects</h1>
          <div className="container"> 
            <div id="portfolio" className="row">
            {
                data.projects && data.projects.map(item => {
                  return(
                    <div key={item.id} className="col-md-3">
                        <a style={aStyle} target="_blank" href={item.url} rel="noopener noreferrer">  
                          <div class="portfolio-piece">
                             <h4 className="text-center">{item.projectName}</h4>
                            <h6 className="text-center"> {item.description}</h6>
                            <img src={item.imageUrl} alt="Placeholder"/>
                            <h6 className="text-center">Click Here</h6>

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
