import React, { Component } from 'react'

export class About extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="about">
      <h1 className="border_new"><i class="fa fa-user"></i> About Me</h1>
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-6">
          <p>{data.aboutMe}</p>
        </div>
      <div className="col-md-6">
         <img src={data.profileImage} alt="Afrida Logo" className="img-circle shadow up-hover avatar"/>
      </div>
    </div>
  </div>
     
   </section>
    )
  }
}

export default About;
