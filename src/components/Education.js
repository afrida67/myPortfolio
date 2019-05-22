import React, { Component } from 'react';

export class Education extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="education">
      <h1>Education</h1>
      <div>
            <ul>
                {
                    data.education && data.education.map(item => {
                      return(
                              <li key={item.id}> 
                             <h6>{item.schoolName}</h6> 
                             <h6>{item.degree}</h6>
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

export default Education
