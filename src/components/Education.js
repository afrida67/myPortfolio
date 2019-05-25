import React, { Component } from 'react';

export class Education extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="education">
      <h1 className="border_new"><i className="fa fa-university"></i> Education</h1>
          <div>
              <ul>
                {
                    data.education && data.education.map(item => {
                      return(
      
                            <div key={item.id}>
                                 <h6 className="dataText">{item.degree} from  <a href={item.url} target="_blank" rel="noopener noreferrer">{item.schoolName}</a>, {item.timePeriod}</h6>
                              </div>
           
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
