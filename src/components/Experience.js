import React, { Component } from 'react'

export class Experience extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="experience">
      <h1 className="border_new"><i class="fa fa-briefcase"></i> Experience</h1>
      <div>
            <ul>
                {
                    data.experience && data.experience.map(item => {
                      return(
                              <li key={item.id}> 
                             <a href={item.url} target="_blank" rel="noopener noreferrer"><h6>{item.company}</h6></a>
        
                             <h6>{item.position}</h6>
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

export default Experience
