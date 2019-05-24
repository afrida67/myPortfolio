import React, { Component } from 'react'

export class About extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="about">
      <h1 className="border_new"><i class="fa fa-user"></i> About Me</h1>
      <div className="row">
        <div className="col-md-5">
           <img src={data.profileImage} alt="Afrida Logo" className="img-circle shadow up-hover avatar"/>
        </div>
         <div className="col-md-7">
              <p>{data.aboutMe}</p>
        </div>
      </div>
     
   </section>
    )
  }
}

export default About;
