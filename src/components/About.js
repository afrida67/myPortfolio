import React, { Component } from 'react'

export class About extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="about">

      <div>
        <img src={process.env.PUBLIC_URL + '/images/mypic.jpeg'} alt="Afrida Logo" className="img-circle shadow up-hover avatar" />
            <p>{data.aboutme}</p>
      </div>
     
   </section>
    )
  }
}

export default About;
