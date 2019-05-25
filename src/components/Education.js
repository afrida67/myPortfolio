import React, { Component } from 'react';

export class Education extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="education">
      <h1 className="border_new"><i class="fa fa-university"></i> Education</h1>
          <div>
              <ul>
                {
                    data.education && data.education.map(item => {
                      return(
                        <li>
                            <div key={item.id}>
                                <h6 className="dataText">{item.schoolName}</h6> 
                                <h6 className="dataText">{item.degree}</h6>
                              </div>
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
