import React, { Component } from 'react';

export class Education extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="education">
      <h1 className="border_new"><i class="fa fa-university"></i> Education</h1>
          <div>
                {
                    data.education && data.education.map(item => {
                      return(
                            <h2 key={item.id}> 
                             <h6>{item.schoolName}</h6> 
                             <h6>{item.degree}</h6>
                              </h2>
                            )
                      }
                    )
                  }
       </div>
      </section>
    )
  }
}

export default Education
