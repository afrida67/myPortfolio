import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

import Typer from './Typer';
export class Home extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="home">
      <div>
        <Jumbotron className="home">
            <h1 className="display-3">Hello, world!</h1>
              <Typer heading={'root:~$'} dataText={ data.typewriter } />
            <div className="linkNew">
            <nav>
            <ul className="social">
                {
                    data.socialProfiles && data.socialProfiles.map(item => {
                      return(
                              <li key={item.id}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                { 
                                  item.className? <i className={item.className}></i> : <img src={item.imageUrl} alt="social"/>
                                }
                                </a>
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
      </section>
    )
  }
}

export default Home;
