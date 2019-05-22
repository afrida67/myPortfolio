import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        let data = this.props.data;
        return (
            <section id="contact">
            <h1 className="border_new"><i class="fa fa-id-badge"></i> Contact Me</h1>
            <div>
            <h6>{ data.contact.mail }</h6>
             </div>
            </section>
        )
    }
}

export default Contact
