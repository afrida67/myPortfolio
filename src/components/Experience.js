import React, { Component } from 'react'

export class Experience extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="experience">
      <h1 className="border_new"><i className="fa fa-briefcase"></i> Experience</h1>
      <div>
             {
                data.experience && data.experience.map(item => {
                      return(
                            <div key={item.id}>
                                   <div className="row">
                                      <div className="col-md-9">
                                      <h5>{item.position}</h5>
                                        <h5><a href={item.url} target="_blank" rel="noopener noreferrer">{item.company}</a></h5>
                                      </div>
                                      <div className="col-md-3">
                                        <h5>{item.timePeriod}</h5>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <p>{item.summary}</p>
                                 
                                          {
                                            item.responsibilty && item.responsibilty.map(res => {
                                              return(
                                                <ul key={res.id}>
                                                  <li >{res.phase}</li>
                                              </ul>
                                              )
                                              }
                                            )
                                          }
                               
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
