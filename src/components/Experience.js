import React, { Component } from 'react'

export class Experience extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="experience">
      <h1 className="border_new"><i class="fa fa-briefcase"></i> Experience</h1>
      <div>
             {
                data.experience && data.experience.map(item => {
                      return(
                            <div key={item.id}>
                                   <div className="row">
                                      <div className="col-md-9">
                                      <h4>{item.position}</h4>
                                        <h4><a href={item.url} target="_blank" rel="noopener noreferrer">{item.company}</a></h4>
                                      </div>
                                      <div className="col-md-3">
                                        <h3>{item.timePeriod}</h3>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <p>Here I work with</p>
                                        <ul>
                                          <li>- UI design and development.</li>
                                          <li> Configuration, maintenance and custom development.</li>
                                        </ul>
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

export default Experience
