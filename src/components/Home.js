import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export class Home extends Component {
  state = {
    username: '',
}
  render() {
    let data = this.props.data;
    return (
      <div>
        <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">I am {data.name}</p>
            <hr className="my-2" />
            <p>I'm currently working as a {data.role} at {data.company}.</p>
            <div className="linkNew">
            <nav>
            <ul className="social">
                {
                    data.socialProfiles && data.socialProfiles.map(item => {
                      return(
                              <li key={item.id}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                              </li>
                            )
                      }
                    )
                  }
            </ul>
            </nav>
            </div>
    
      </Jumbotron>
      </div>
    )
  }
}

export default Home;
