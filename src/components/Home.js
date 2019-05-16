import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

export class Home extends Component {
  render() {
    let data = this.props.data;
    console.log('aa'+data);
    return (
      <div>
        <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">I am {data.name}</p>
            <hr className="my-2" />
            <p>I'm currently working as a {data.role} at {data.company}.</p>
            <p className="lead">
            <Button color="primary">Learn More About Me Below</Button>
            </p>
      </Jumbotron>
      </div>
    )
  }
}

export default Home;
